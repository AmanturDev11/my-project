import { Product2 } from "./Product2";
import { Product3 } from "./Product3";
import { Product1 } from "./homeSction/Product1";
import Slider from "./homeSction/Slider";

const HomePage = () => {
	return (
		<>
			<Slider />
			<Product1 />
			<Product2 />
			<Product3 />
		</>
	);
};

export default HomePage;
