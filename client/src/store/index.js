import {createStore} from 'redux'
import chatReduce from '../reducer/index'

const store = createStore(
	chatReduce,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
