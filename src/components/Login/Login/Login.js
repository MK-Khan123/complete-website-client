import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import loginImg from '../../../images/loginBg.jpg';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

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
            <NavigationBar />
            <Container>
                <Row className="my-5">
                    <Col md={4} className="shadow rounded-3 p-4">
                        <h3>Login</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLabel">
                            <Form.Label className='text-danger'>Forgot your password?</Form.Label>
                        </Form.Group>
                        <Button variant={'primary'} onClick={handleGoogleSignIn}>Google Sign In</Button>
                    </Col>

                    <Col md={7} className="ms-auto">
                        <img src={loginImg} className="img-fluid" alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;