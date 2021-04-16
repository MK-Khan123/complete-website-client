import React from 'react';
import fakeClient from '../../../images/fakeClient.jpg';
import fakeClient2 from '../../../images/fakeClient2.jpg';
import feedback from '../../../images/feedback.gif';

const reviewData = [
    {
        name: 'Katherine Jones',
        designation: 'Visualizer',
        img: fakeClient,
        feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sequi!'
    },
    {
        name: 'Katherine Jones',
        designation: 'Visualizer',
        img: fakeClient2,
        feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sequi!'
    },
    {
        name: 'Katherine Jones',
        designation: 'Visualizer',
        img: fakeClient,
        feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sequi!'
    },
    {
        name: 'Katherine Jones',
        designation: 'Visualizer',
        img: fakeClient2,
        feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sequi!'
    }
];

const Reviews = () => {
    return (
        <section className='container'>
            <h3 className='border-bottom pt-5'><img src={feedback} style={{ height: "70px", width: "6rem" }} alt="" />WHAT OUR CLIENTS SAY</h3>
            <div className="d-flex justify-content-center">
                <div className='row w-80 mt-5'>
                    {
                        reviewData.map(review => {
                            const { name, designation, feedback, img } = review;
                            return (
                                <div className='col-md-4 p-2 mb-2'>
                                    <div className="card shadow" style={{ width: "100%" }}>
                                        <img src={img} style={{ height: "250px" }} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h4 className="card-title">{name}</h4>
                                            <p className="card-text">{designation}</p>
                                            <h5 className="card-text">{feedback}</h5>
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