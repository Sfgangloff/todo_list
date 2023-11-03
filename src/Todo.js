import React, { Component } from 'react';
import { collection, doc, deleteDoc } from "firebase/firestore";
import { db } from './firebase.config';

class Todo extends Component {

    constructor(props) {
      super(props)
  
      this.state = {
          id:this.props.id,
          timeCategory:this.props.timeCategory,
          date:this.props.date,
          text:this.props.text,
          isSelected:false, 
        }
  
      this.selfRef = React.createRef()
  
  
      this.supress = this.supress.bind(this)
    
  }
  
  
  
  supress(e) {
    const todoRef = collection(db,"todos")
    if (e.keyCode === 46 && this.state.isSelected) {
        if (window.confirm('Are you sure you wish to delete these todos')) {
        deleteDoc(doc(db,"todos",this.state.id));
        }
    }
    }

    
  
  
    render() {

        let urlToxicImg = new URL("toxic.png",import.meta.url);

        if (this.state.timeCategory==="long-term") {
            return <tr key={this.state.id}> <td tabIndex="0" style={{backgroundColor:(this.state.isSelected ? "#FFAF19": "white")}} onKeyDown = {(e) => this.supress(e)} onClick={()=> this.setState({isSelected:!this.state.isSelected})} className="todo">{this.state.text}</td></tr>
        } else if (this.state.timeCategory==="short-term") {
           return  <tr key={this.state.id} className="short-term-task todo" style={{backgroundColor:(this.state.isSelected ? "#FFAF19": "white")}} tabIndex="0" onKeyDown = {(e) => this.supress(e)} onClick={()=> this.setState({isSelected:!this.state.isSelected})}><td><div> {this.state.text}</div></td><td><div style={{textAlign:"center"}}>{this.state.date}</div></td></tr>
        } else if (this.state.timeCategory==="date") {
            return <div className="todo" style={{backgroundColor:(this.state.isSelected ? "#FFAF19": "white")}} key={this.state.id} tabIndex="0" onKeyDown = {(e) => this.supress(e)} onClick={()=> this.setState({isSelected:!this.state.isSelected})}>&#x25B7; {this.state.text}</div>
        }
    }
  }
  
  export default Todo;
