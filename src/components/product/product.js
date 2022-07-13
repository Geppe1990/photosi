import { useState } from "react";
import { useLocation } from 'react-router-dom';

const Product = () => {
	const location = useLocation()
	console.log(location.state.attr)
	const [prd] = useState({
		name: location.state && location.state.attr.name ? location.state.attr.name : '',
		color: location.state && location.state.attr.color ? location.state.attr.color : '',
		size: location.state && location.state.attr.size ? location.state.attr.size : '',
		category: location.state && location.state.attr.category ? location.state.attr.category : '',
		code: location.state &&  location.state.attr.code ? location.state.attr.code : ''
	});

	return (
		<div className="section">
			<div className="container">
				<div className="columns">
					<div className="column">
						{prd.name}<br />
						{prd.color}<br />
						{prd.size}<br />
						{prd.category}<br />
						{prd.code}<br />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product;