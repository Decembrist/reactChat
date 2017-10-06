import {connectNewUser, disconnectedUser} from '../action'
import store from '../store'


export default ((wsUrl) => {
	let ws;
	const {dispatch} = store;
	ws = new WebSocket(wsUrl);
	ws.onopen = () => {
		console.log('WS open');
	};
	ws.onmessage = message => {
		const messageObj = JSON.parse(message.data);
		console.log(messageObj);
		const {userId, userName} = messageObj;
		switch (messageObj.type){
			case 'connect_new_user':
				dispatch(connectNewUser(userId, userName));
				break;
			case 'disconnected_user':
				dispatch(disconnectedUser(userId));
				break;
		}
	};
	let counterReconnect = 0;
	const emit = (message) => {
		if(counterReconnect > 5) return;
		if(ws.readyState === ws.CONNECTING){
			setTimeout(() => {
				emit(message);
				counterReconnect++;
			},500);
			return
		}
		ws.send(message);
		counterReconnect = 0;
	};
	return {emit};
})('ws://localhost:3000');