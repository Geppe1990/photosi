import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link, useLocation } from 'react-router-dom';

const Product = () => {
	const { state } = useLocation()
	const navigate = useNavigate();

	const [prd] = useState({
		name: state && state.attr.name ? state.attr.name : '',
		color: state && state.attr.color ? state.attr.color : '',
		size: state && state.attr.size ? state.attr.size : '',
		category: state && state.attr.category ? state.attr.category : '',
		code: state && state.attr.code ? state.attr.code : '',
		description: state && state.attr.description ? state.attr.description : '',
	});

	useEffect(() => {
		if(!state || !state.attr) { 
			navigate("/");
		}
	}, [navigate, state])

	return (
		<div className="section">
			<div className="container">
				<div className="columns">
					<div className="column is-one-third">
						<p className="is-size-8 pb-2">{prd.category ? prd.category.toUpperCase() : null}</p>
						<p className="is-size-4 pb-2">{prd.name}</p>
						<p className="pb-2">{prd.description}</p>
					</div>
					<div className="column is-one-third">
						<figure className="image is-9by16">
							<img src="https://bulma.io/images/placeholders/480x600.png" alt="Placeholder" />
						</figure>
					</div>
					<div className="column is-one-third">
						<p className="pb-2"><span className="has-text-weight-bold">COLORE:</span>&nbsp;&nbsp;{prd.color ? prd.color.toUpperCase() : null}</p>
						<p className="pb-2"><span className="has-text-weight-bold">TAGLIA:</span>&nbsp;&nbsp;{prd.size ? prd.size.toUpperCase() : null}</p>
						<p className="pb-6"><span className="has-text-weight-bold">CODICE PRODOTTO:</span>&nbsp;&nbsp;{prd.code ? prd.code.toUpperCase() : null}</p>

						<button className="button is-primary is-fullwidth mb-2">Aggiungi al carrello</button>
						<Link 
							to={`/edit/${prd.code}`}
							className="button is-danger is-fullwidth"
							state={prd}
						>
							Modifica Prodotto
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product;