import React from 'react';
import { useDispatch } from 'react-redux';
import isSelected from '../../Redux/student-details/studentDetails.action'
import {isNotSelected,setClass} from '../../Redux/student-details/studentDetails.action'

const StudentDetail = (props) => {
  const dispatch = useDispatch();
  var handleCheckBox = (e) => {
     var studentId = e.target.id;
    //  dispatch(setClass(studentId,'A'))
     if(e.target.checked) {
      dispatch(isSelected(studentId));
     }
     else{
      dispatch(isNotSelected(studentId));
     }
  }
  return (
    <div className="StudentContainer">
      <div className="checkbox">
        <input type="checkbox" id={props.id} onChange={(e)=>handleCheckBox(e)}/> 
         {props.name}
      </div>
    </div>
  )
}

export default StudentDetail;