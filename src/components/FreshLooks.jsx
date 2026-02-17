import React from "react";
import Button from "./Button";
import imageLeft from "../assets/exclusive-1.png";
import imageRight from "../assets/exclusive-2.png";

const FreshLooks = () => {
	return (
		<section className="bg-white py-22">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center bg-gray-600 relative">
					<div className="h-50 lg:h-100 xl:h-150">
						<img
							src={imageLeft}
							alt="image"
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="h-50 lg:h-100 xl:h-150">
						<img
							src={imageRight}
							alt="image"
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="bg-black/60 h-full w-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
						<div className="max-w-150 mx-auto text-center py-24 ">
							<h3 className="text-white text-3xl lg:text-5xl">
								Fresh Looks for Sunny Days
							</h3>
							<p className="pt-5 pb-10 text-white leading-normal">
								From breezy suits to playful sets — this season is all about
								feeling good and looking better. Step into Spring/Summer with
								pieces that radiate confidence, color, and comfort.
							</p>
							<Button primary={false}>Shop Now</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FreshLooks;
