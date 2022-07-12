const ProductList = ({ product }) => {
	if(!product) { return }

	const { name, color, size, category } = product;

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
					<a href="#id">#css</a> <a href="#id">#responsive</a>
					<br />
					<time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
				</div>
			</div>
		</div>
	)
}

export default ProductList;