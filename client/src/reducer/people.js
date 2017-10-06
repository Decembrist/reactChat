
const peopleReduce = (state = [], action) => {
	switch (action.type){
		case 'CONNECTED_NEW_USER' :
			return state.concat({
				id: action.userId,
				userName: action.userName
			});
			break;
		case 'DISCONNECTED_USER':
			return state.filter(u => {
				return u.id !== action.userId
			});
			break;
		default:
			return state;
	}
};

export default peopleReduce