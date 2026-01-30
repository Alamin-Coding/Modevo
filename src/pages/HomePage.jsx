import Banner from "../components/Banner";
import TodayDeal from "../components/deals/TodayDeal";
import Discount from "../components/Discount";
import Feature from "../components/Feature";

const HomePage = () => {
	return (
		<>
			<Banner />
			<Discount />
			<Feature />
			<TodayDeal />
		</>
	);
};

export default HomePage;
