import ProductList from "../productList/productList";
import { useSelector } from 'react-redux';
import Filters from "../filters/filters";

const List = () => {
	const products = useSelector((state) => state.products)
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