import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import { useState } from "react";

const Input = ({ label, value, callback, k }) => (
	<div className="field">
		<label className="label">{label}</label>
		<div className="control">
			<input 
				className="input"
				type="text"
				value={value}
				onChange={(e) => callback({ [k]: e.target.value})}
			/>
		</div>
	</div>
);

const RadioInput = ({ label, elms, callback, name, param, k }) => { 
	return(
		<div className="field">
			<label className="label">{label}</label>
			<div className="control">
				{elms.map((elm, i) => (
					<div key={i} className="pb-2">
						<label className="radio" key={i}>
							<input
								checked={elm.value === param}
								type="radio"
								name={name}
								value={elm.value}
								onChange={(e) => callback({ [k]: e.target.value })}
							/>&nbsp;{elm.label}
						</label>
						<br />
					</div>
				))}
			</div>
		</div>
)}

const TextareaInput = ({ label, value, callback, k }) => {
	return(
		<div className="field">
			<label className="label">{label}</label>
			<div className="control">
				<textarea 
					className="textarea"
					placeholder={label}
					value={value}
					onChange={(e) => callback({ [k]: e.target.value })}
				/>
			</div>
		</div>
	)
}

const Insert = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const { addNewProduct } = bindActionCreators(actionCreators, dispatch)

	const [product, setProduct] = useState({
		name: "",
		color: "",
		size: "",
		category: "",
		code: "",
		description: ""
	});

	const updateForm = (value) => (setProduct((prev) => ({ ...prev, ...value })))

	const onSubmit = (e) => {
		e.preventDefault();
		addNewProduct(product);

		navigate("/");
	}

	return (
		<div className="section">
			<div className="container">
				<div className="columns">
					<div className="column">
						<div className="field">
							<h2 className="is-size-2">Crea Prodotto</h2>
						</div>

						<form onSubmit={onSubmit}>
							<Input 
								label="Nome"
								value={product.name}
								callback={updateForm}
								k="name"
							/>
							<RadioInput
								elms={[
									{ value: "Pantaloni", label: "Pantaloni" },
									{ value: "Scarpe", label: "Scarpe" }
								]}
								label="Categoria"
								param={product.category}
								callback={updateForm}
								name="categoryType"
								k="category"
							/>
							<RadioInput
								elms={[
									{ value: "Rosso", label: "Rosso" },
									{ value: "Verde", label: "Verde" }
								]}
								label="Colore"
								param={product.color}
								callback={updateForm}
								name="colorType"
								k="color"
							/>
							<RadioInput
								elms={[
									{ value: "Large", label: "Large" },
									{ value: "Medium", label: "Medium" },
									{ value: "Small", label: "Small" }
								]}
								label="Taglia"
								param={product.size}
								callback={updateForm}
								name="sizeType"
								k="size"
							/>
							<Input 
								label="Codice"
								value={product.code}
								callback={updateForm}
								k="code"
							/>
							<TextareaInput 
								label="Descrizione"
								value={product.description}
								callback={updateForm}
								k="description"
							/>
							<div className="field">
								<div className="control">
									<input type="submit" value="Crea" className="button is-primary" />
								</div>
							</div>
						</form>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Insert;