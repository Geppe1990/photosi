import { useState } from "react";

const Input = ({ value, callback }) => (
	<div className="control">
		<input 
			className="input"
			type="text"
			value={value}
			onChange={(e) => callback(e.target.value)}
		/>
	</div>
);

const RadioInput = ({ elms, callback, name }) => (
	<div className="control">
		{elms.map((elm, i) => (
			<div key={i} className="pb-2">
				<label className="radio" key={i}>
					<input
						type="radio"
						name={name}
						value={elm.value}
						checked={elm.checked}
						onChange={(e) => callback(e.target.value)}
					/>&nbsp;{elm.label}
				</label>
				<br />
			</div>
		))}
	</div>
)

const Filters = () => {
	const [searchName, setSearchName] = useState("");
	const [searchSize, setSearchSize] = useState("");
	const [searchColor, setSearchColor] = useState("");
	const [searchCategory, setSearchCategory] = useState("");

	return (
		<aside className="menu is-one-third">
			<h2 className="is-size-4">Cerca</h2>
			<p className="menu-label">Nome</p>
			<ul className="menu-list field">
				<li>
					<Input 
						value={searchName}
						callback={setSearchName}
					/>
				</li>
			</ul>
			<p className="menu-label">Categorie</p>
			<ul className="menu-list field">
				<li>
					<RadioInput
						elms={[{
							value: "Pantaloni",
							label: "Pantaloni",
							checked: searchCategory === "Pantaloni"
						},{
							value: "Scarpe",
							label: "Scarpe",
							checked: searchCategory === "Scarpe"
						}]}
						callback={setSearchCategory}
						name="categoryType"
					/>
				</li>
			</ul>
			<p className="menu-label">Colore</p>
			<ul className="menu-list field">
				<li>
					<RadioInput
						elms={[{
							value: "Rosso",
							label: "Rosso",
							checked: searchColor === "Rosso"
						},{
							value: "Verde",
							label: "Verde",
							checked: searchColor === "Verde"
						}]}
						callback={setSearchColor}
						name="colorType"
					/>
				</li>
			</ul>
			<p className="menu-label">Taglia</p>
			<ul className="menu-list field">
				<li>
					<RadioInput
						elms={[{
							value: "Large",
							label: "Large",
							checked: searchSize === "Large"
						},{
							value: "Medium",
							label: "Medium",
							checked: searchSize === "Medium"
						},{
							value: "Small",
							label: "Small",
							checked: searchSize === "Small"
						}]}
						callback={setSearchSize}
						name="sizeType"
					/>
				</li>
			</ul>
			
		</aside>
	)
}

export default Filters;