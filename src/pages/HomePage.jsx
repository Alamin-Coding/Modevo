import Banner from "../components/Banner";
import Discount from "../components/Discount";
import Feature from "../components/Feature";
import NewCollection from "../components/NewCollection";
import ExclusiveFeatured from "../components/ExclusiveFeatured";
const HomePage = () => {
	return (
		<>
			<Banner />
			<Discount />
			<Feature />
			<NewCollection />
			<ExclusiveFeatured />
		</>
	);
};

export default HomePage;
