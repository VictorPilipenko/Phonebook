import authReducer from './authReducer'
import recordReducer from './recordReducer'
import filterReducer from './filterReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    record: recordReducer,
    filter: filterReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer