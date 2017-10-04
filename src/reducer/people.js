const peoples = ['Mark', 'Vasiliy', 'Pupkin'];
const peopleReduce = (state = peoples, action) => {
	if(action.type === 'ADD_NEW_USER'){
		return state.concat('OLOLOEV')
	}
	return state
};

export default peopleReduce