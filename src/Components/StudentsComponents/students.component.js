import React, { Component } from 'react';
import { connect } from 'react-redux';
import './students.css';
import StudentDetail from '../StudentComponent/student.component';

class Student extends Component {
  constructor(props){
    super();
  }
 render() {
   return (
     <div className="StudentContainer">
        <div className="studentHeader"> <h1>All Students</h1></div>
        <div className="students"> This is a student component</div>
        <div className="studentDetails">
        {this.props.students.map(student =>   {
          if(student.currentClass==='none'){
          return (<StudentDetail name={student.name} id={student.id}/>)
          }
          })}
        </div>
        
     </div>
   )
 }
}

var mapStateToProps = (state) => {
  return {
      students:state.students.studentDetails
  }
}

export default connect(mapStateToProps,null)(Student);