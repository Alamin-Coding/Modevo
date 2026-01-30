import { Outlet } from "react-router";
import Header from "./Header";
import Blogs from "./Blogs/Blogs"

const MainLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Blogs />
			<footer>Footer</footer>
			
			
		</>
	);
};

export default MainLayout;
