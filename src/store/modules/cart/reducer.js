import produce from 'immer';

const INITIAL_STATE = {
    items: [],
    failedStockCheck: []
}

/**
 * Product - id, title, price
 * CartItem - product, quantity
 * Price - number
 */

const cart = (state = INITIAL_STATE, action) => {
    return produce(state, draft => {
        switch(action.type) {
            case 'ADD_PRODUCT_TO_CART_SUCCESS': {
                
                const { product } = action.payload;
                
                const productInCartIndex = draft.items.findIndex(item => item.product.id === product.id);
    
                if(productInCartIndex >= 0)
                    draft.items[productInCartIndex].quantity++;
                else
                    draft.items.push({
                        product,
                        quantity: 1
                    });

                break;
    
            }
            case 'ADD_PRODUCT_TO_CART_FAILURE': {
                draft.failedStockCheck.push(action.payload.productId);
                
                break;
            }
            default: {
                return state;
            }
        }
    });
}

export default cart;