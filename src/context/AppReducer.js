const AppReducer = (state, action) => {

    switch(action.type) {
        case 'ADD_TO_CART': {
            return {
                ...state,
                productsToBuy: [...state.productsToBuy, action.payload],
                totalPrice: state.totalPrice + (action.payload.newPrice ? action.payload.newPrice : action.payload.price)
            }
        }
        case 'REMOVE_FROM_CART': {
            return {
                ...state,
                productsToBuy: state.productsToBuy.filter(p => p.id !== action.payload),
                totalPrice: state.totalPrice - (action.payload.newPrice ? action.payload.newPrice : action.payload.price)
            }
        }
        default: throw Error('Cannot find action ' + action.type);
    }
}

export default AppReducer;