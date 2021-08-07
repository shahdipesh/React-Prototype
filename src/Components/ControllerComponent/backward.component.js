import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {setClass,isNotSelected} from '../../Redux/student-details/studentDetails.action'
const Backward = () => {
    const studentDetails = useSelector((state) => state.students.studentDetails);
    const dispatch = useDispatch();
    var handleBackwardClick=()=>{
        studentDetails.forEach((student)=>{
           if(student.isSelected && student.currentClass=='A'){
               var id= student.id;
               dispatch(setClass(id,'none'))
               dispatch(isNotSelected(id));
           }
        });
    }

 return (
   <div>
       <button onClick={()=>{handleBackwardClick()}}>Move Backward</button>
   </div>
 )
}

export default Backward;