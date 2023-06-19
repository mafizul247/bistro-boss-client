import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { Helmet } from 'react-helmet';
import useCart from '../../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    console.log(price);
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Payment</title>
            </Helmet>
            <SectionTitle subHeading='Please Process' heading='Payment' />
            <h3 className='text-3xl'>Payment</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price} />
            </Elements>
        </div>
    );
};

export default Payment;