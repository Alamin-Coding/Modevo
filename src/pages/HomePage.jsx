import Banner from "../components/Banner";
import TodayDeal from "../components/deals/TodayDeal";
import AboutUs from "../components/AboutUs/AboutUs";
import Discount from "../components/Discount";
import Feature from "../components/Feature";
import NewCollection from "../components/NewCollection";
import ExclusiveFeatured from "../components/ExclusiveFeatured";
import Blogs from "../components/Blogs/Blogs";
import ProductSlider from "../components/ProductSlider";
import Subscribe from "../components/Subscribe";
import FreshLooks from "../components/FreshLooks";
import TestimonialSection from "../components/TestimonialSection";
const HomePage = () => {
	return (
		<>
			<Banner />
			<Discount />
			<Feature />
			<AboutUs />
			<ProductSlider />

			<ExclusiveFeatured />
			<NewCollection />
			<TodayDeal />
			<Subscribe />
			<FreshLooks />
			<Blogs />
			<TestimonialSection />
		</>
	);
};

export default HomePage;
