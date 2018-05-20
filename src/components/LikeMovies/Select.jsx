import React, { Component } from 'react';

class Select extends Component {
  render(){
  return (
    <div className="control">
      <div className="select is-medium">
        <select onChange={this.props.onSelectChange} value={this.props.favorites ? "favorite" : "all"} >
          <option value="all">All</option>
          <option value="favorite">Favorite</option>
        </select>
      </div>
    </div>
  )}
}
export default Select;