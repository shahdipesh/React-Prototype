import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {setClass,isNotSelected} from '../../Redux/student-details/studentDetails.action'
const Forward = () => {
    const studentDetails = useSelector((state) => state.students.studentDetails);
    const dispatch = useDispatch();
    var handleForwardClick=()=>{
        
        studentDetails.forEach((student)=>{
           if(student.isSelected && student.currentClass=='none'){
               var id= student.id;
               dispatch(setClass(id,'A'))
               dispatch(isNotSelected(id))
           }
        });
    }

 return (
   <div>
       <button onClick={()=>{handleForwardClick()}}>Move forward</button>
   </div>
 )
}

export default Forward;