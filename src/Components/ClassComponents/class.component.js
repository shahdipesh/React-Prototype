import React, { Component } from 'react';
import './class.css';
import StudentDetail from '../StudentComponent/student.component'
import { connect } from 'react-redux';
class ClassCompoent extends Component {
  constructor(props) {
    super(props);
  }
 render() {
   return (
     <div className="classContainer">
        <div className="classHeader"> <h1>Class A</h1></div>
        <div className="class"> This is a class component</div>
        <div className="studentDetails">
        {this.props.students.map(student =>   {
          if(student.currentClass==='A'){
          return (<StudentDetail name={student.name} id={student.id}/>)
          }
          })}
        </div>
     </div>
   )
 }
}

var mapStateToProps=(state)=>{
  return{
    students:state.students.studentDetails
  }
}

export default connect(mapStateToProps,null)(ClassCompoent);