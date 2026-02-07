import React from "react";
import image from "../../assets/about-us.jpg";
// import Button from './Button.jsx'

const AboutUs = () => {
	return (
		<section>
			<div className="grid grid-cols-2 ">
				<div className="bg-[#F3F3F3]">
					<div className="py-[155px] px-[116px]">
						<p className="pt-2">About us</p>
						<h1 className="text-black text-[64px] font-medium font-jost leading-[1.3] tracking-[0.46%] pt-2 ">
							Designed to Empower, Crafted to Last
						</h1>
						<p className="max-w-124.75 text-[#757575] font-jost text-[16px] leading-normal tracking-[0.46%] pt-5 pb-10 ">
							At Modevo, we blend timeless design with modern flair — creating
							pieces that inspire confidence, celebrate individuality, and
							redefine everyday elegance. From detail to silhouette, every piece
							tells a story of quality and character.
						</p>
						<div className="max-w-40.5 border-black border-solid border cursor-pointer uppercase justify-center items-center py-3.5 px-5.5 ">
							<button>Explore more </button>
						</div>
					</div>
				</div>
				<div className="opacity-40 object-cover flex items-center justify-center">
					<img src={image} alt="about us" className="h-full w-full" />
				</div>
			</div>
		</section>
	);
};

export default AboutUs;

// max-w-40.5 border-black border-solid border cursor-pointer uppercase mt-5 justify-center items-center py-3.5 px-5.5
