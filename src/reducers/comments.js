 import {SAVE_COMMENT,FETCH_COMMENTS,DELETE_COMMENTS} from 'actions/types'
  


const initialState=[]

export default function(state=initialState,action){
    switch(action.type){
        case SAVE_COMMENT :
        return [...state,action.payload]
        case FETCH_COMMENTS:
        const comments =action.payload.data.map(item=>item.name)
        return [...state,...comments]
        case DELETE_COMMENTS:
        return initialState
        default:
        return state
    }
}