import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<ul>
					<li> 
						<Link to="/contact">Contact List</Link> 
					</li>
					<li> 
						<Link to="/addcontact">AddContact</Link>
					</li>
					<li> 
						<Link to="/viewcontact">View Contact</Link> 
					</li>
					<li> 
						<Link to="/editcontact">Edit Contact</Link>
					</li>
				</ul>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};