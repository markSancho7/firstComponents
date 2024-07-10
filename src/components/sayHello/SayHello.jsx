const SayHello = props => {
	console.log(props.nombre);
	return <h1>Hola {props.nombre}</h1>;
};
export default SayHello;
