import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IeN99AgijutooIEgpjOyHHlYIqvqgnuErH4SCg33TVHYIFnm1VpBtaMTTPiffQBNycAbEoGHC1iHu8tXFNyA8eQ007xZgjXEO');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm />
        </Elements>
    );
};

export default ProcessPayment;