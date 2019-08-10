import { combineReducers } from "redux"

import userReduer from "./user/user.reducer"

export default combineReducers({
    user: userReduer
})