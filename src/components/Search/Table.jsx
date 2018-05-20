import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
     
     render(){
          return (
               
     <div className="table">
        <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {
          this.props.movies.map((movie) => {
              return(
                <tr key={movie.title}>
                <td>{movie.title}</td>
                <td>{movie.type}</td>
                <td>{movie.rate}</td>
              </tr>
              );
            })
            }
        </tbody>
        </table> 
      </div>
          )
     }
}
Table.propTypes = {
     movies: PropTypes.array.isRequired
}
export default Table;