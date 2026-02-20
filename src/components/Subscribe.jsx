import Button from "./Button";

const Subscribe = () => {
	return (
		<section className="py-10 bg-[#515050]">
			<div className="container">
				<div className="px-3 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-3.5 items-center">
					<p className="text-2xl lg:text-3xl text-white">
						Exlusive Member - plus 8% reward and free shipping
					</p>
					<div>
						<Button primary={false}>Shop Now</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
