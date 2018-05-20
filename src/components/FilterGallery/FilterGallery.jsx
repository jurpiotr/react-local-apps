import React, { Component } from 'react';
import './FilterGallery.css';
import { categories, images } from './data';
import SelectGallery from './SelectGallery';
import Gallery from './Gallery';

class FilterGallery extends Component {
  state = {
    allImages: images,
    imagesList: images,
    categoryList: categories
  }
  handleSelectChange = (e) => {
    const newImages = this.state.allImages.filter((image) => {
        return parseInt(e.target.value) === image.categoryId;
    })

    this.setState({
      imagesList: newImages
    });
    console.log(newImages);
  }
  render(){
    return (
      <section className="section FilterGallery project">
        <h1 className="title">Filter Gallery React App</h1>
        <div className="container header">
          <div className="field">
            <div className="control">
              <div className="select is-medium">
                <SelectGallery onSelectImg={this.handleSelectChange} categoryList={this.state.categoryList} />
              </div>
            </div>
          </div>
        </div>
        <Gallery imagesList={this.state.imagesList}/>
      </section>
    
    )
  }
}

export default FilterGallery;