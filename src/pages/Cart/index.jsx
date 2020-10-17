import React from 'react';
import { useSelector } from 'react-redux';
import cart from '../../store/modules/cart/reducer';

const Cart = () => {
    const cart = useSelector(state => state.cart.items);

    return (
        <table>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Qtt</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(item => (
                    <tr key={item.product.id}>
                        <td>{item.product.title}</td>
                        <td>{item.product.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.product.price * item.quantity}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Cart;