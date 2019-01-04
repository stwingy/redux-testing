import React, { Component } from 'react';


export default ChildComponent => {
  class ComposedComponent extends Component {
    
  handleClick=()=>{
     this.props.deleteComments()
   
  }
    render() {
      return(
          <div>
              <button onClick={this.handleClick}>hoc button</button>
              <ChildComponent {...this.props} />
          </div>
      ) 
    }
  }


  return ComposedComponent
};