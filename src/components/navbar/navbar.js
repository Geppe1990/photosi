import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-menu">
				<div className="navbar-start">
					<div className="navbar-item">
						<div className="buttons">
							<NavLink className="button is-primary" to="/">
								Home
							</NavLink>
						</div>
					</div>
					<div className="navbar-item">
						<div className="buttons">
							<NavLink className="button is-primary" to="/create">
								Nuovo Prodotto
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;