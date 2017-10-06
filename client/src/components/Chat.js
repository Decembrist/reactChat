import React, {Component} from 'react'
import {Provider} from 'react-redux'
import ChatWrapp from '../container/ChatWrapp'
import store from '../store'
window.store = store;



class Chat extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="container clearfix">
					<ChatWrapp />
				</div>
			</Provider>
		)
	}
}

export default Chat