import { combineReducers } from "redux";
import studentDetailsReducer from './student-details/studentDetails.reducer'
export default combineReducers({
   students:studentDetailsReducer
})