import {combineReducers} from 'redux'
import peopleReduce from './people'

const allReduce = combineReducers({peopleReduce});

export default allReduce;