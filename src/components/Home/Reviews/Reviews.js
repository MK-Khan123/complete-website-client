import React, { useEffect, useState } from 'react';
import feedback from '../../../images/feedback.gif';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = 'https://desolate-springs-76107.herokuapp.com/reviews';
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <section className='container'>
            <h3 className='border-bottom pt-5'><img src={feedback} style={{ height: "70px", width: "6rem" }} alt="" />WHAT OUR CLIENTS SAY</h3>
            <div className="d-flex justify-content-center">
                <div className='row mt-5'>
                    {
                        reviews.map(reviewData => {
                            const { name, designation, review, reviewImage, _id } = reviewData;
                            return (
                                <div key={_id} className='col-md-4 p-2 mb-2'>
                                    <div className="card shadow" style={{ width: "80%" }}>
                                        <img src={reviewImage} style={{ height: "250px" }} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h4 className="card-title">{name}</h4>
                                            <p className="card-text">{designation}</p>
                                            <h5 className="card-text">{review}</h5>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;