import './Cart.css';

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCart, cartAdded } from '../../Redux/CartSlice';
import { updateItemQty, deleteFromCart } from '../../Services/Api/cart';

import { Redirect } from 'react-router-dom';

import CartItem from './CartItem';
import Checkout from '../Checkout/Checkout';

import Loader from '../Loader/Loader';

// * STRIPE.js *
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { publicKey } from '../../Services/config';
const promise = loadStripe( publicKey );

const Cart = ({ history }) => {
    const dispatch = useDispatch();

    const [status, setStatus] = useState('Cart');

    const user = useSelector(state => state.customer.user);
    const products = useSelector(state => state.cart.products);
    const total = useSelector(state => state.cart.total);
    const cartStatus = useSelector(state => state.cart.status);

    let redirect = null;
    if(user === null){
        redirect = <Redirect to='/' />
    };
    
    useEffect(() => {
        if(products === null && user !== null){
            dispatch(fetchCart());
        };
    }, []);

    const onIncrement = async (item) => {
        const quantity = item.quantity + 1
        const updatedItem = {
            username: user.username,
            id: item.product_id,
            qty: quantity,
            size: item.size
        };
            
        const response = await updateItemQty(updatedItem);
        if(response.error){
            alert(response.error);
        } else {
            dispatch(cartAdded(response));
        };

    };

    const onDecrement = async (item) => {
        if(item.quantity === 1){
            return;
        } else {
            const quantity = item.quantity - 1
            const updatedItem = {
                username: user.username,
                id: item.product_id,
                qty: quantity,
                size: item.size
            };
            
            const response = await updateItemQty(updatedItem);
            if(response.error){
                alert(response.error);
            } else {
                dispatch(cartAdded(response));
            };

        };
    };

    const onDelete = async (item) => {
        let size;
        if(item.size.includes('/')){
            size = item.size.replaceAll('/', '_');
        } else {
            size = item.size;
        };
        
        const data = {
            username: user.username,
            id: item.product_id,
            size: size
        };

        const response = await deleteFromCart(data);
        
        if(response !== true){
            alert(response);
        } else {
            dispatch(fetchCart());
        };
        
    };
    
    let cartItems;
    let checkoutButton;
    let checkout;

    const onCancel = () => {
        setStatus('Cart');
    };

    const onCheckout = () => {
       setStatus('Checkout');
    };

    if(products !== null && cartStatus === 'succeeded'){
        cartItems = products.map((item, i) => (
            <CartItem key={i} item={item} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} listKey={i} />
        ));
        checkoutButton = (
        <div className='cart-checkout' >
            <p>TOTAL: €{total}</p>
            <button type='button' onClick={onCheckout} className='to-checkout' >CHECKOUT</button>
        </div>
        );
    } else if(cartStatus === 'loading'){
        cartItems = <Loader />;
    } else {
        cartItems = <p>No Items In Cart</p>
    };

    if(status === 'Checkout'){
       checkout = (
        <Elements stripe={promise} >
            <Checkout total={total} onCancel={onCancel} cart={products} history={history} />
        </Elements>
       );
    } else if(status === 'Cart') {
        checkout = null;
    };

    return(
        <div className='cart' >
            <h2>CART</h2>
            {cartItems}
            {checkoutButton}
            {checkout}
            {redirect}
        </div>
    );
};

export default Cart; 