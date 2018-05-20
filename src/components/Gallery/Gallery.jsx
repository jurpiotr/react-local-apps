import React, { Component } from 'react';
import './Gallery.css';
import images from './data';
import GalleryList from './GalleryList';
import SelectImage from './SelectImage';

class Gallery extends Component {
  state = {
    imagesList: images,
    chosenImg: ''
  }
  handleSelectImage = (e) => {
    const listImg = e.target.parentElement.parentElement.querySelectorAll('div');
    Array.from(listImg).forEach((img) => {
      img.removeAttribute('class')
    })
    e.target.parentElement.className =  'chosen';

    this.setState({
      chosenImg: e.target.getAttribute('src')
    });
  }
  render(){
  return (
    <section className="section Gallery project">
      <h1 className="title">Gallery React App</h1>
      <div className="container">
        <GalleryList imagesList={this.state.imagesList} onSelectImage={this.handleSelectImage} />
        <SelectImage active={this.state.chosenImg} />
      </div> 
    </section>)
  }
}

export default Gallery;