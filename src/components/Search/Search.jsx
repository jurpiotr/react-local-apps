import React, { Component } from 'react';
import './Search.css';
import movies from './data';
import ActionSearch from './ActionSearch';
import Table from './Table';

class Search extends Component {

  state = {
    copyMovies: movies
  }
  handleSearching = (e) => {
    let copyMovies = [...movies];
    this.value = e.target;
    copyMovies = copyMovies.filter((movie) => {
      return movie.title === this.value.value;
    });
    this.setState({
      copyMovies
    });
  }
  render(){
  return (<section className="section search project">
    <div className="container">
      <h1 className="title">Search React App</h1>
      <ActionSearch onSearching={this.handleSearching}/>
      <Table movies={this.state.copyMovies}/>
      </div>
    </section>)
  }
}
export default Search;