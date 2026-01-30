import { Outlet } from "react-router";
import Header from "./Header";

const MainLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<footer></footer>
		</>
	);
};

export default MainLayout;
