import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import './Food.css';

class Food extends Component {
	render() {
		const name = this.props.match.params.name;
		if (/\d/.test(name)) this.props.history.push('/notfound');
		const url = `https://source.unsplash.com/1600x900/?${name}`;
		return (
			<div className="Food">
				{/\d/.test(name) ? (
					<Redirect to="/notfound" />
				) : (
					<Fragment>
						<h1>I love to eat {name}</h1>
						<img src={url} alt={name} />
					</Fragment>
				)}
			</div>
		);
	}
}

export default Food;
