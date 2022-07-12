import ProductList from "../productList/productList";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Filters from "../filters/filters";

const List = () => {
	const [products, setProducts] = useState([{
			name: "Giuseppe",
			color: "Rosso",
			size: "Large",
			category: "Scarpe"
		}, {
			name: "Giulia",
			color: "Verde",
			size: "Medium",
			category: "Pantaloni"
		}, {
			color: "Rosso",
			size: "Small",
			category: "Scarpe"
		}, {
			color: "Verde",
			size: "Small",
			category: "Pantaloni"
		}, {
			color: "Rosso",
			size: "Medium",
			category: "Scarpe"
		}, {
			color: "Verde",
			size: "Large",
			category: "Scarpe"
		}
	]);

	const filter = useSelector((state) => state.filter)
		
	return (
		<div className="section">
			<div className="container">
				<div className="columns">
					<div className="column is-one-quarter">
						<Filters />
					</div>
					<div className="column is-three-quarters">
						<div className="columns is-multiline">
							{products.map((product, i) => {
								console.log("PRODOTTO " + i);
								console.log(product.category)
								console.log(filter.category)
								console.log(product.category === filter.category || filter.category === '')
								if(
									(product.category === filter.category || filter.category === '') &&
									(product.size === filter.size || filter.size === '') &&
									(product.color === filter.color || filter.color === '')
								) {
									return (
										<div className="column is-one-quarter" key={i}>
											<ProductList product={product} />
										</div>
									)
								} else { return null }
							})}
						</div>	
					</div>
				</div>
			</div>
		</div>
	)
}

export default List;