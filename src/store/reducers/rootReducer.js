import authReducer from './authReducer'
import recordReducer from './recordReducer'
import filterReducer from './filterReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    record: recordReducer,
    filter: filterReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer