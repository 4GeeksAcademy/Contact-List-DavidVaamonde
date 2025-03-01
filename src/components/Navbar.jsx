import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<ul className="navbar-nav me-auto mb-2">

					<li className="nav-item"> 
						<Link to="/contacts" className="nav-link">Contactos</Link> 
					</li>
					<li className="nav-item"> 
						<Link to="/addcontact" className="nav-link">Añadir contacto</Link>
					</li>
					
				</ul>
				
			</div>
		</nav>
	);
};