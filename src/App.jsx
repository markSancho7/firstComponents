import CalculateSquareArea from './components/calculateSquareArea/CalculateSquareArea';
import CalculateTriangleArea from './components/calculateTriangleArea/CalculateTriangleArea';
import SayHello from './components/sayHello/SayHello';

const nombre = 'Marcos';
const side = 4;
const triangleSide = 4;
const triangleTop = 5;

const App = () => {
	return (
		<>
			<SayHello nombre={nombre} />
			<CalculateSquareArea side={side} />
			<CalculateTriangleArea
				triangleSide={triangleSide}
				triangleTop={triangleTop}
			/>
		</>
	);
};

export default App;
