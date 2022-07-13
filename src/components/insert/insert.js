const Input = ({ label, value, callback }) => (
	<div className="field">
		<label className="label">{label}</label>
		<div className="control">
			<input 
				className="input"
				type="text"
				value={value}
				onChange={e => callback(e.target.value)}
			/>
		</div>
	</div>
);

const RadioInput = ({ label, elms, callback, name, param }) => { 
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
								onChange={(e) => callback(e.target.value)}
							/>&nbsp;{elm.label}
						</label>
						<br />
					</div>
				))}
			</div>
		</div>
)}

const Insert = () => {
	return (
		<div className="section">
			<div className="container">
				<div className="columns">
					<div className="column">
						<div className="field">
							<h2 className="is-size-2">Crea Prodotto</h2>
						</div>
						<Input 
							label="Nome"
							// value={name}
							// callback={filterNewName}
						/>
						<RadioInput
							elms={[{
								value: "Pantaloni",
								label: "Pantaloni",
							},{
								value: "Scarpe",
								label: "Scarpe",
							}]}
							label="Categoria"
							// param={category}
							// callback={filterNewCategory}
							name="categoryType"
						/>
						<RadioInput
							elms={[{
								value: "Rosso",
								label: "Rosso",
								// checked: color === "Rosso"
							},{
								value: "Verde",
								label: "Verde",
								// checked: color === "Verde"
							}]}
							label="Colore"
							// param={color}
							// callback={filterNewColor}
							name="colorType"
						/>
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
							label="Taglia"
							// param={size}
							// callback={filterNewSize}
							name="sizeType"
						/>
						<Input 
							label="Codice"
							// value={name}
							// callback={filterNewName}
						/>
						<div className="field">
							<label className="label">Descrizione</label>
							<div className="control">
								<textarea class="textarea" placeholder="Descrizione"></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Insert;