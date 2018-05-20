import React, { Component } from 'react';
import SingleTask from './SingleTask';

class Tasks extends Component {

render(){
     return (
          <div className="notification">
                <SingleTask tasks={this.props.tasks} onClick={this.props.onClick} />
          </div>
     )}
}

export default Tasks;