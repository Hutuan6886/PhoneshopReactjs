import {combineReducers} from 'redux';
import phoneReducer from '../Phone/phoneReducer'
import cartReducer from '../Phone/cartReducer'

const rootReducer = combineReducers ({
    //todo: Nơi quản lý nhiều state theo từng chức năng của ứng dụng

    statePhone: phoneReducer,
    stateGioHang: cartReducer
})
export default rootReducer;