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
	const { name, category, color, size } = useSelector((state) => state.filter)
	const dispatch = useDispatch()
	const { filterNewName, filterNewCategory, filterNewColor, filterNewSize } = bindActionCreators(actionCreators, dispatch)

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
							checked: category === "Pantaloni"
						},{
							value: "Scarpe",
							label: "Scarpe",
							checked: category === "Scarpe"
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
							checked: color === "Rosso"
						},{
							value: "Verde",
							label: "Verde",
							checked: color === "Verde"
						}]}
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
							checked: size === "Large"
						},{
							value: "Medium",
							label: "Medium",
							checked: size === "Medium"
						},{
							value: "Small",
							label: "Small",
							checked: size === "Small"
						}]}
						callback={filterNewSize}
						name="sizeType"
					/>
				</li>
			</ul>
		</aside>
	)
}

export default Filters;