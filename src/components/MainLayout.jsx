import { Outlet } from "react-router";
import Header from "./Header";
import footer from "./footer";

const MainLayout = () => {
	return (
		<>
		    		
			<Header />
			<Outlet />
			<footer>Footer</footer>
			
		</>
	);
};

export default MainLayout;
