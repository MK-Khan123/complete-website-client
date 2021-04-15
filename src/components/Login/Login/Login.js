import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import loginImg from '../../../images/loginBg.jpg';
import Navbar from '../../Shared/Navbar/Navbar';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config';

//To handle [DEFAULT] error.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    console.log(loggedInUser);

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                user.signedInUser = true;
                setLoggedInUser(user);
                history.replace(from);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <section>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 shadow p-5 mb-2">
                        <h3>Login</h3>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="text-danger">Forgot your password?</label>
                        </div>
                        <button onClick={handleGoogleSignIn} className="btn btn-primary">Google Sign In</button>
                    </div>

                    <div className="col-md-6 ms-auto">
                        <img src={loginImg} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;