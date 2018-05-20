import React, { Component } from 'react';

class SelectImage extends Component {
     
     render(){
          return (
          <div className="galleryRight">
               <img src={this.props.active} alt='smth' />
          </div>
             
          )
         
     }
}

export default SelectImage;