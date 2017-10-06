import React, {Component} from 'react';
import {connect} from 'react-redux'
import UserItem from '../components/UserItem'

class PeopleList extends Component {
	render() {
		//console.log(this.props);
		const {peoples} = this.props;
		return (
			<div className="people-list" id="people-list">
				<div className="search">
					<input type="text" placeholder="search"/>
					<i className="fa fa-search" />
				</div>
				<ul className="list">
					{peoples.map(people => <UserItem key={people.id} {...people}/>)}
				</ul>
			</div>
		)
	}
}

export default connect(state => ({
	peoples: state.peopleReduce
}))(PeopleList)