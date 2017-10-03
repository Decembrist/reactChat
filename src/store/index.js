import {createStore} from 'redux'
import chatReduce from '../reducer/index'

const store = createStore(chatReduce);

export default store;