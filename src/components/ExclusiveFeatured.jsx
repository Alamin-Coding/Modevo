import React from "react";
// components
import Button from "./Button";
import ExclusiveFeaturedCard from "./ExclusiveFeaturedCard";

//  all assets
// slide images

import left from "../assets/left.png";
import right from "../assets/right.png";
// card images
import exclusive_1 from "../assets/exclusive-1.png";
import exclusive_2 from "../assets/exclusive-2.png";
import exclusive_3 from "../assets/exclusive-3.png";
import exclusive_4 from "../assets/exclusive-4.png";

// exclusive featured component

const ExclusiveFeatured = () => {
	return (
		// section start
		<section>
			<div className="container py-12 relative">
				{/* card header */}

				<h2 className="flex items-center justify-center font-medium text-[40px] ">
					Featured
				</h2>

				{/* card design */}
				<div className="grid grid-cols-4 justify-between gap-8 py-15">
					<ExclusiveFeaturedCard
						title="Relaxed Stitch Shirt"
						img={exclusive_1}
						text="ADD TO CART"
						showUnderline={true}
						colors={["#55483B", "#403D72", "#E5C2C3", "#E6DDD6"]}
					/>
					<ExclusiveFeaturedCard
						title="Off-Duty Denim Set"
						img={exclusive_2}
						text="ADD TO CART"
						showUnderline={true}
						colors={["#3A582C", "#2B2A2F", "#3A582C"]}
					/>
					<ExclusiveFeaturedCard
						title="Off-Duty Denim Set"
						img={exclusive_3}
						text="ADD TO CART"
						showUnderline={true}
						colors={["#3A582C", "#2B2A2F", "#3A582C"]}
					/>
					<ExclusiveFeaturedCard
						title="Off-Duty Denim Set"
						img={exclusive_4}
						text="ADD TO CART"
						showUnderline={true}
						colors={["#3A582C", "#2B2A2F", "#3A582C"]}
					/>
				</div>

				{/* card slide button */}

				<span className="absolute left-[-2.5%] top-[45%] transform -translate-y-1/2">
					<Button>
						<img src={left} alt="Left" />
					</Button>
				</span>

				<span className="absolute right-[-2.5%] top-[45%] transform -translate-y-1/2">
					<Button>
						<img src={right} alt="Right" />
					</Button>
				</span>
			</div>
		</section>
		// section end
	);
};

export default ExclusiveFeatured;
