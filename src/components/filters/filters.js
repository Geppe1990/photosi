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

const RadioInput = ({ elms, callback, name, param }) => { 
	return(
	<div className="control">
		{elms.map((elm, i) => (
			<div key={i} className="pb-2">
				<label className="radio" key={i}>
					<input
						checked={elm.value === param}
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
	const { name, category, color, size } = useSelector((state) => state.filter)
	const dispatch = useDispatch()
	const { filterNewName, filterNewCategory, filterNewColor, filterNewSize } = bindActionCreators(actionCreators, dispatch)

	const resetFilters = () => {
		filterNewName("");
		filterNewCategory("");
		filterNewColor("");
		filterNewSize("");
	}

	return (
		<aside className="menu is-one-third">
			<h2 className="is-size-4">Cerca</h2>
			<p className="menu-label">Nome</p>
			<ul className="menu-list field">
				<li>
					<Input 
						value={name}
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
						},{
							value: "Scarpe",
							label: "Scarpe",
						}]}
						param={category}
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
							checked: color === "Rosso"
						},{
							value: "Verde",
							label: "Verde",
							checked: color === "Verde"
						}]}
						param={color}
						callback={filterNewColor}
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
						param={size}
						callback={filterNewSize}
						name="sizeType"
					/>
				</li>
			</ul>
			<p className="menu-label">Reset</p>
			<ul className="menu-list field">
				<li>
					<button 
						className="button is-primary"
						onClick={resetFilters}
					>Resetta filtri</button>
				</li>
			</ul>
		</aside>
	)
}

export default Filters;