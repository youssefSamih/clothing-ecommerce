import { combineReducers } from "redux"

import userReduer from "./user/user.reducer"
import cartReducer from "./cart/cart.reducer"

export default combineReducers({
    user: userReduer,
    cart: cartReducer
})