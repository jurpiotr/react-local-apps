import React, { Component } from 'react';

class SingleTask extends Component {

  render(){
    
    return (
      this.props.tasks.map((task, index) => {
        return (
          <div>
            <label className="checkbox is-size-3">
              <input onClick={() => this.props.onClick(index)} className="todo-checkbox" type="checkbox" checked={task.done} />
              {task.title}
            </label>
          </div>
          );
        })
     )
   }
}
export default SingleTask;