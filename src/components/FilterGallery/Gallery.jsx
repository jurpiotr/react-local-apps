import React, { Component } from 'react';

class Gallery extends Component {
  render(){
  return (
     <div className="container">
          {
               this.props.imagesList.map((image, index) => {
                    return(
                         <div key={index}>
                              <img src={image.img} alt='smth' />
                         </div>
                    )
               })
          }    
     </div> 
  )}
}
export default Gallery;