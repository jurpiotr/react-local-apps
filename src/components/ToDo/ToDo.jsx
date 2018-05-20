import React, { Component } from 'react';
import './ToDo.css';
import HeaderToDo from './HeaderToDo';
import Tasks from './Tasks';
import AddTask from './AddTask';
import PropTypes from 'prop-types';

class ToDo extends Component {
  state = {
    tasks: [
      {
      title: 'buy milk',
      done: false
      },
      {
      title: 'learn',
      done: true
      }
    ]
  };

  result = () => {
    let sum = 0;
    this.state.tasks.forEach((task) => {
      if(task.done === true){
      sum = sum + 1;
    }
   
    });
    return sum;
  }

  handleChecking = (index) => {
    const newTasks = [...this.state.tasks];
    newTasks[index].done = !newTasks[index].done;
    
    this.setState({
      newTasks
    });
  }
  handleAdding = (e) => {
    this.input = e.target.parentElement.previousElementSibling.children[0];
    this.state.tasks.push({title: this.input.value, done: false});
    this.input.value = '';
    
    this.setState({
      
    });
  }
  render(){

  return (
    <section className="section todo project">
      <div className="columns">
        <div className="column container is-fluid">
          <HeaderToDo done={this.result()} count={this.state.tasks.length} />
          <Tasks tasks={this.state.tasks} arr={this.state} onClick={this.handleChecking}/>
          <AddTask onClick={this.handleAdding}/>
         </div>
      </div>  
    </section>
  )
}
}
ToDo.propTypes = {
  total: PropTypes.number.isRequired
}
export default ToDo;