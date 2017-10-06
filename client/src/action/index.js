export function connectNewUser(userId, userName) {
	return {
		type: 'CONNECTED_NEW_USER',
		userId,
		userName
	}
}
export function disconnectedUser(userId) {
	return {
		type: 'DISCONNECTED_USER',
		userId
	}
}