import ProductList from "../productList/productList";
import { useState } from "react";

function List() {
	//TODO: Inserire products come stato
	const [products, setProducts] = useState([{
			name: "Giuseppe",
			color: "Red",
			size: "XL",
			code: "123456789",
			category: "Shoes"
		}, {
			name: "Giuseppe",
			color: "Red",
			size: "XL",
			code: "123456789",
			category: "Shoes"
		}, {
			color: "Red",
			size: "XL",
			code: "123456789",
			category: "Shoes"
		}
	]);

	return (
		<div className="section">
			<div className="container">
				<div className="columns is-multiline">
					{products.map((product, i) => (
						<div className="column is-one-quarter" key={i}>
							<ProductList product={product} />
						</div>
					))}
					{/* <div className="column is-one-quarter">
						<Product />
					</div>
					<div className="column is-one-quarter">
						<Product />
					</div>
					<div className="column is-one-quarter">
						<Product />
					</div> */}
				</div>
			</div>
		</div>
	)
}

export default List;