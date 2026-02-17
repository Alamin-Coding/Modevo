import "./Grid.css";
const Grid = () => {
	return (
		<div className="py-20">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_auto] gap-3 md:gap-6">
					<div className="bg-[red] h-48">1</div>
					<div className="bg-[green] h-48">2</div>
					<div className="bg-[blue] h-48">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
						quibusdam!
					</div>
					<div className="bg-[yellow] h-48">4</div>
					<div className="bg-[yellow] h-48">5</div>
					<div className="bg-[yellow] h-48">6</div>
					<div className="bg-[yellow] h-48">7</div>
				</div>
			</div>

			<div className="container">
				<div className="my_grid">
					<nav className="navbar">Navbar</nav>
					<aside className="aside">Sidebar</aside>
					<section className="banner">Banner</section>
					<section className="about">About</section>
					<footer className="footer">footer</footer>
				</div>
			</div>
		</div>
	);
};

export default Grid;
