import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'
import ComListHOC from 'components/ComListHOC'
 class CommentList extends Component {

renderComments(){
  
    
    return this.props.comments.map((item)=>{
        return(
            <li key={item}>{item}</li>
        )
    })
}

  render() {
    return (
      <div>
          <ul>
              <h4>Comment List</h4>
              {this.renderComments()}
          </ul>
        
      </div>
    )
  }
}
 function mapStateToProps(state){
     return{comments:state.comments}
 }

export default connect(mapStateToProps,actions)(ComListHOC(CommentList))
