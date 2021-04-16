import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState();

    const onSubmit = data => console.log(data);

            const handleImageUpload = event => {
            const imageData = new FormData();
            imageData.set('key', '6a505607e7aa21f071b1c0ec3e817fdf');
            imageData.append('image', event.target.files[0]);
    
            axios.post('https://api.imgbb.com/1/upload', imageData)
                .then(res => setImageURL(res.data.data.display_url))
                .catch(error => console.log(error));
    
            const currentTime = new Date().getTime(); //This 4s delay is used so that the image gets uploaded on ImgBB and generates an URL which will be sent to MongoDB database after pressing 'Save'.
            while (currentTime + 4000 >= new Date().getTime());
        };

        // const onSubmit = data => {
    //     const productData = {
    //         productName: data.productName,
    //         productWeight: data.productWeight,
    //         productPrice: data.productPrice,
    //         productImage: imageURL
    //     };
    //     const url = 'https://localhost/addProduct';
    //     fetch(url, {
    //         method: 'POST',
    //         headers: { 'Content-type': 'application/json' },
    //         body: JSON.stringify(productData)
    //     })
    //         .then(res => console.log('server side response', res));
    //     alert("Product added successfully! Please go to Home page to see the update.");
    // };
    
    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-5" style={{ marginLeft: "250px" }}>
                <h2 style={{ paddingBottom: "30px", paddingTop: "20px" }}>Add your review here</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-3">
                        <label className="form-label">
                            <h5>Your name</h5>
                        </label>
                        <input name="name" className="form-control" type="text" ref={register({ required: true })} />
                        {errors.name && <span style={{ color: 'red' }}>Your name is required</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            <h5>Upload your image</h5>
                        </label>
                        <input name="reviewImage" className="form-control" onChange={handleImageUpload} type="file" ref={register({ required: true })} />
                        {errors.reviewImage && <span style={{ color: 'red' }}>Your image is required</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            <h5>Designation</h5>
                        </label>
                        <input name="designation" className="form-control" type="text" ref={register({ required: true })} />
                        {errors.designation && <span style={{ color: 'red' }}>Your designation is required</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            <h5>Your review</h5>
                        </label>
                        <input name="review" className="form-control" type="text" ref={register({ required: true })} />
                        {errors.review && <span style={{ color: 'red' }}>Your review is required</span>}
                    </div>

                    <div style={{ textAlign: "end", paddingBottom: "50px" }}>
                        <button className="btn btn-success" type="submit">Add Review</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddReview;