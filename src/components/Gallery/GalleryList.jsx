import React, { Component } from 'react';

class GalleryList extends Component {
     
     render(){
          return (
               
          <div className="galleryLeft">
          {
          this.props.imagesList.map((image, index) => {
               return (
                    <div key={index} onClick={this.props.onSelectImage}>
                         <img src={image} alt='smth' />
                    </div> 
               )
          })
          } 
          </div>  
          )
     }
}

export default GalleryList;