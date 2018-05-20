import React, { Component } from 'react';

class TableRow extends Component {
     render(){
          return (
               props.movies.map((movie) => {
               <tr>
               <td>Matrix</td>
               <td>sci-fi</td>
               <td>10 / 10</td>
             </tr> 
               })
          )
     }
}
export default TableRow;