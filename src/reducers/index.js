import {combineReducers} from 'redux'
import commentsReducer from 'reducers/comments'
import authReducer from 'reducers/rAuth'
export default combineReducers(
    {
        comments:commentsReducer,
        auth:authReducer
    }
)