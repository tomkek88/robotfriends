import React from 'react';

const Card = ({ name, email, id }) => {
	return (

		<div className="dib br3 ma2 pa2 bg-light-green grow shadow-2 tc">
			<img src={`https://robohash.org/${id}`} alt="robot"/>
			<h3>{name}</h3>
			<p>{email}</p>
		</div>

	)
}
export default Card;