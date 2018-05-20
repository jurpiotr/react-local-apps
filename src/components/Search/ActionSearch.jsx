import React, { Component, Fragment } from 'react';

class ActionSearch extends Component {
     render(){
          return (
               <Fragment>
               <div>
                   <input onChange={this.props.onSearching} className="input is-medium" placeholder="Search movie by title" />
               </div>
               <div onChange={this.props.onSearching}>  
                    <a className="button is-medium">Search</a>
               </div> 
               </Fragment> 
          )
     }
}
export default ActionSearch;