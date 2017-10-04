import React, {Component} from 'react'
import {Provider} from 'react-redux'
import PeopleList from '../container/PeopleList'
import MessageList from '../container/MessageList'
import store from '../store'
window.store = store;


class Chat extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="container clearfix">
					<PeopleList />
					<MessageList />
				</div>
			</Provider>
		)
	}
}

export default Chat