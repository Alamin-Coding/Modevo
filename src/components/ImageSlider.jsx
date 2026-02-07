import slideImage_1 from "../assets/product-slide (1).jpg";
import slideImage_2 from "../assets/product-slide (2).jpg";
import slideImage_3 from "../assets/product-slide (3).jpg";
import Slider from "react-slick";
import icon_1 from "../assets/instagram-icon-1.png";

const ImageSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		cssEase: "linear",
	};
	return (
		<section>
			<div className="w-screen">
				<Slider {...settings}>
					<div>
						<ProductSlideImage image={slideImage_1} icon={icon_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} icon={icon_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_3} icon={icon_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} icon={icon_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} icon={icon_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_3} icon={icon_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} icon={icon_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} icon={icon_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} icon={icon_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_3} icon={icon_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} icon={icon_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} icon={icon_1} />
					</div>
				</Slider>
			</div>
		</section>
	);
};

const ProductSlideImage = ({ image, icon }) => {
	return (
		<div className="relative h-[278px]">
			<img src={image} alt="image" className="size-full object-cover" />
			<div className="w-full h-full bg-black/50 absolute top-0 left-0 cursor-pointer flex items-center justify-center z-10 opacity-0 hover:opacity-100 transition-all duration-300">
				<img src={icon} alt="icon" />
			</div>
		</div>
	);
};

export default ImageSlider;
