import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCartRequest } from '../../store/modules/cart/actions'



const CartItem = ({product}) => {

    const dispatch = useDispatch();

    const hasFailedStockCheck = useSelector(state => {
        console.log(state.cart.failedStockCheck);

        return state.cart.failedStockCheck.includes(product.id);
    })
    
    const handleAddProduct = useCallback(() => {
        dispatch(addProductToCartRequest(product));
      },[dispatch, product])
    

    return (
        <article>
            <strong>{product.title}</strong> {" - "}
            <span>{product.price}</span> {"   "}

            <button 
            onClick={() => handleAddProduct(product)}
            type="button">Comprar</button>
        
            { hasFailedStockCheck && <span style={{color: 'red'}}>Falta de stock</span>}
        </article>
    );
};

export default CartItem;