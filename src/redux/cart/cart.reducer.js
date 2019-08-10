import { CartActionTypes } from './cart.type'

const INTIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
    
        default:
            return state
    }
}

export default cartReducer