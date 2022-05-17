import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import { Parallax, Autoplay, Pagination, Navigation } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./Reviews.css";
import reviewBackground from '../../../images/review-background.jpg';
import feedback from '../../../images/feedback.gif';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = 'https://desolate-springs-76107.herokuapp.com/reviews';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <Container>
            <h2 className='border-bottom pt-5 fw-bold'>
                <img src={feedback} style={{ height: "72px", width: "96px" }} alt="" />WHAT OUR CLIENTS SAY
            </h2>
            {
                isLoading &&
                <div className='d-flex justify-content-center align-items-center mt-5'>
                    <Spinner animation="border" variant="dark" />
                </div>
            }
            <div className='mt-5'>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    speed={600}
                    parallax={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Autoplay, Pagination, Navigation]}
                    className="mySwiper" id='review-div'
                >
                    <div
                        slot="container-start"
                        className="parallax-bg"
                        style={{
                            "backgroundImage":
                                `url(${reviewBackground})`,
                            "filter": "grayscale(100%) brightness(30%)"
                        }}
                        data-swiper-parallax="-23%"
                    ></div>
                    {
                        reviews.map(reviewData => {
                            const { name, designation, review, reviewImage, _id } = reviewData;
                            return (
                                <SwiperSlide>
                                    <div key={_id}>
                                        <div className="title" data-swiper-parallax="-300">
                                            <img className='review-image' src={reviewImage} alt="" />
                                        </div>
                                        <div>
                                            <div className="subtitle" data-swiper-parallax="-200">
                                                {review}
                                            </div>
                                            <div className='mt-2'>
                                                <FontAwesomeIcon className='text-warning p-1' size='lg' icon={faStar} />
                                                <FontAwesomeIcon className='text-warning p-1' size='lg' icon={faStar} />
                                                <FontAwesomeIcon className='text-warning p-1' size='lg' icon={faStar} />
                                                <FontAwesomeIcon className='text-warning p-1' size='lg' icon={faStar} />
                                                <FontAwesomeIcon className='text-warning p-1' size='lg' icon={faStar} />
                                            </div>
                                            <h4 className='text-uppercase mt-2'>{name}</h4>
                                            <p>{designation}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
        </Container>
    );
};

export default Reviews;