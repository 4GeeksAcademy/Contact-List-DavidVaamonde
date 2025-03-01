import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Bienvenido a Contact List!! </h1>
			<p>Aquí teneis a un bebé bonito</p>
			<p>| | | | | | |</p>
			<p>vvvvvvv</p>
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
}; 