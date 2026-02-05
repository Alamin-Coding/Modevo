import Banner from "../components/Banner";
import TodayDeal from "../components/deals/TodayDeal";
import AboutUs from "../components/AboutUs/AboutUs";
import Discount from "../components/Discount";
import Feature from "../components/Feature";
import NewCollection from "../components/NewCollection";
import ExclusiveFeatured from "../components/ExclusiveFeatured";
import Blogs from "../components/Blogs/Blogs";
const HomePage = () => {
	return (
		<>
			<Banner />
			<Discount />
			<AboutUs />
			<Feature />
			<NewCollection />
			<ExclusiveFeatured />
			<Blogs />
			<TodayDeal />
		</>
	);
};

export default HomePage;
