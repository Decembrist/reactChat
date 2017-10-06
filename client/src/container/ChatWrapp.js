import React, {Component} from 'react';
import PeopleList from '../container/PeopleList'
import MessageList from '../container/MessageList'
import authHOC from './authHOC'

class ChatWrapp extends Component {
	render() {
		return (
			<div>
				<PeopleList />
				<MessageList />
			</div>
		)
	}
}

export default authHOC(ChatWrapp);