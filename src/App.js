import './App.css';
import Student from './Components/StudentsComponents/students.component';
import ClassComponent from './Components/ClassComponents/class.component';
import Forward from './Components/ControllerComponent/forward.component'
import Backward from './Components/ControllerComponent/backward.component'
import React, { Component } from 'react';

class App extends Component {
 render() {
   return (
    <div className="App">
      <div className="components"> 
      <div className="StudentComponent"><Student /></div>
      <div className="controls"> <div className="forwardBtn"><Forward /></div> <div className="backBtn"><Backward /></div></div>
      <div className="ClassComponent"><ClassComponent /></div>
      </div>
    </div>
   )
 }
}

export default App;