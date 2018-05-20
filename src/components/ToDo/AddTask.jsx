import React, { Component } from 'react';


class AddTask extends Component {
render(){
     return (
          <div className="columns">
            <div className="column is-two-thirds">
              <input className="input is-large" placeholder="Your task description" />
            </div>
            <div className="column" onClick={this.props.onClick}>  
              <a className="button is-link is-large">Add Task</a>
            </div>
          </div>
     )}
}
export default AddTask;