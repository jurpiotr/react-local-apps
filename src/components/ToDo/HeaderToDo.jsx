import React, { Component } from 'react';

class HeaderToDo extends Component {
render(){
     return (
          <h1 className="title">ToDo React App &nbsp;  
          <span className="has-text-success">{this.props.done}</span> / {this.props.count}
          </h1>
     )}
}
export default HeaderToDo;