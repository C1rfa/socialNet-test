import {createStore, combineReducers} from 'redux'

//reducers
import {userReducer} from './user_reducer'
import {usersPageReducer} from './usersPage_reducer'
import {dialogPageReducer} from './dialogPage_reducer'


let reducers = combineReducers({
    profilePage: userReducer,
    usersPage: usersPageReducer,
    dialogsPage: dialogPageReducer,
})

let store = createStore(reducers)

export default store