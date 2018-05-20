import React, { Component } from 'react';

class SelectGallery extends Component {
  render(){
  return (
     <select onChange={this.props.onSelectImg}>
     {
     this.props.categoryList.map((cat) => {
          return(
               <option key={cat.id} value={cat.id}>{cat.name}</option>
               )
          })
     }    
   </select>
  )}
}
export default SelectGallery;