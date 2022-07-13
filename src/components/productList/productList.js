import { Link, NavLink } from "react-router-dom";

const ProductList = ({ attr }) => {
	if(!attr) { return }
	const { name, color, size, category } = attr;

	return (
		<div className="card">
			<div className="card-image">
				<figure className="image is-4by3">
					<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
				</figure>
			</div>
			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<p className="title is-4">{name}</p>
						<p className="subtitle is-6">{color}</p>
					</div>
				</div>

				<div className="content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus nec iaculis mauris. <a href="#id">@bulmaio</a>.
					<br /><br />
					<NavLink 
						className="button is-primary"
						to={`/${attr.code}`}
						state={{ attr }}
					>
						Vai al prodotto
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default ProductList;