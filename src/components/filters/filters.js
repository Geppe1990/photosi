import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

const Input = ({ value, callback }) => (
	<div className="control">
		<input 
			className="input"
			type="text"
			value={value}
			onChange={e => callback(e.target.value)}
		/>
	</div>
);

const RadioInput = ({ elms, callback, name }) => { 
	return(
	<div className="control">
		{elms.map((elm, i) => (
			<div key={i} className="pb-2">
				<label className="radio" key={i}>
					<input
						type="radio"
						name={name}
						value={elm.value}
						onChange={(e) => callback(e.target.value)}
					/>&nbsp;{elm.label}
				</label>
				<br />
			</div>
		))}
	</div>
)}

const Filters = () => {
	const [searchName, setSearchName] = useState("");
	const [searchCategory, setSearchCategory] = useState("");
	const [searchSize, setSearchSize] = useState("");
	const [searchColor, setSearchColor] = useState("");
	
	// REDUX
	const filterName = useSelector((state) => state.filter)
	const filterCategory = useSelector((state) => state.filter)
	const dispatch = useDispatch()
	const { filterNewName, filterNewCategory } = bindActionCreators(actionCreators, dispatch)

	return (
		<aside className="menu is-one-third">
			<div className="test">  {/* TODO RIMUOVI BLOCCO */}
				{filterName}
			</div>
			<h2 className="is-size-4">Cerca</h2>
			<p className="menu-label">Nome</p>
			<ul className="menu-list field">
				<li>
					<Input 
						value={filterName}
						callback={filterNewName}
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
							checked: filterCategory === "Pantaloni"
						},{
							value: "Scarpe",
							label: "Scarpe",
							checked: filterCategory === "Scarpe"
						}]}
						callback={filterNewCategory}
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
						},{
							value: "Verde",
							label: "Verde",
						}]}
						val={searchColor}
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
						},{
							value: "Medium",
							label: "Medium",
						},{
							value: "Small",
							label: "Small",
						}]}
						val={searchSize}
						callback={setSearchSize}
						name="sizeType"
					/>
				</li>
			</ul>
			
		</aside>
	)
}

export default Filters;