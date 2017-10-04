import {combineReducers} from 'redux'
import peopleReduce from './people'

const allReduse = combineReducers({peopleReduce});

export default allReduse;