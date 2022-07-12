import ProductList from "../productList/productList";
import { useState } from "react";
import Filters from "../filters/filters";

const List = () => {
	const [products, setProducts] = useState([{
			name: "Giuseppe",
			color: "Red",
			size: "XL",
			category: "Shoes"
		}, {
			name: "Giuseppe",
			color: "Red",
			size: "XL",
			category: "Shoes"
		}, {
			color: "Red",
			size: "XL",
			category: "Shoes"
		}, {
			color: "Red",
			size: "XL",
			category: "Shoes"
		}, {
			color: "Red",
			size: "XL",
			category: "Shoes"
		}, {
			color: "Red",
			size: "XL",
			category: "Shoes"
		}
	]);

	return (
		<div className="section">
			<div className="container">
				<div className="columns">
					<div className="column is-one-quarter">
						<Filters />
					</div>
					<div className="column is-three-quarters">
						<div className="columns is-multiline">
							{products.map((product, i) => (
								<div className="column is-one-quarter" key={i}>
									<ProductList product={product} />
								</div>
							))}
						</div>	
					</div>
				</div>
			</div>
		</div>
	)
}

export default List;