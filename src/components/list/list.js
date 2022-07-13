import ProductList from "../productList/productList";
import { useState } from "react";
import { useSelector } from 'react-redux';
import Filters from "../filters/filters";

const List = () => {
	const [products] = useState([{
			name: "Giuseppe",
			color: "Rosso",
			size: "Large",
			category: "Scarpe",
			code: "123",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus unde voluptatibus eius eos aspernatur fuga cum maiores inventore? Omnis itaque debitis illum at laudantium nostrum fuga accusantium error iusto aut?"
		}, {
			name: "Giulia",
			color: "Verde",
			size: "Medium",
			category: "Pantaloni",
			code: "456",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus unde voluptatibus eius eos aspernatur fuga cum maiores inventore? Omnis itaque debitis illum at laudantium nostrum fuga accusantium error iusto aut?"
		}, {
			name: "Andrea",
			color: "Rosso",
			size: "Small",
			category: "Scarpe",
			code: "789",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus unde voluptatibus eius eos aspernatur fuga cum maiores inventore? Omnis itaque debitis illum at laudantium nostrum fuga accusantium error iusto aut?"
		}, {
			name: "Riccardo",
			color: "Verde",
			size: "Small",
			category: "Pantaloni",
			code: "012",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus unde voluptatibus eius eos aspernatur fuga cum maiores inventore? Omnis itaque debitis illum at laudantium nostrum fuga accusantium error iusto aut?"
		}, {
			name: "Michele",
			color: "Rosso",
			size: "Medium",
			category: "Scarpe",
			code: "345",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus unde voluptatibus eius eos aspernatur fuga cum maiores inventore? Omnis itaque debitis illum at laudantium nostrum fuga accusantium error iusto aut?"
		}, {
			name: "Matteo",
			color: "Verde",
			size: "Large",
			category: "Scarpe",
			code: "678",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus unde voluptatibus eius eos aspernatur fuga cum maiores inventore? Omnis itaque debitis illum at laudantium nostrum fuga accusantium error iusto aut?"
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
								const filterName = product.name.toLowerCase().includes(filter.name.toLowerCase()) || filter.name === '';
								const filterCategory = product.category === filter.category || filter.category === '';
								const filterSize = product.size === filter.size || filter.size === '';
								const filterColor = product.color === filter.color || filter.color === '';
								const showProduct = filterName && filterCategory && filterSize && filterColor

								if(showProduct) {
									return (
										<div className="column is-one-quarter" key={i}>
											<ProductList attr={product} />
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