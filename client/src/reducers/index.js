import {combineReducers} from 'redux'
import books from './reducers'
import Auth from './Auth'
 const reducers= combineReducers({
    books,
    Auth
})

export default reducers