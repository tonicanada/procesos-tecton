import {combineReducers} from 'redux'

import userReducer from './user/user.reducer.js';
import directoryReducer from './directory/directory.reducer'
import payrollReducer from './payroll/payroll.reducer'


export default combineReducers({
    user: userReducer,
    directory: directoryReducer,
    payroll: payrollReducer
})