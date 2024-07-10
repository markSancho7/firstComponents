const CalculateTriangleArea = props => {
	return (
		<h2>
			el area del triangulo de lado {props.triangleSide} y altura{' '}
			{props.triangleTop} es {(props.triangleSide * props.triangleTop) / 2}
		</h2>
	);
};
export default CalculateTriangleArea;
