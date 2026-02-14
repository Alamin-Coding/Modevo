import slideImage_1 from "../assets/product-slide (1).jpg";
import slideImage_2 from "../assets/product-slide (2).jpg";
import slideImage_3 from "../assets/product-slide (3).jpg";
import Slider from "react-slick";

const ProductSlider = () => {
	const SM_settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};
	const MD_settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
	};
	const LG_settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 1,
	};
	return (
		<section>
			{/* Small Device */}
			<div className="w-screen md:hidden">
				<Slider {...SM_settings}>
					<div>
						<ProductSlideImage image={slideImage_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_3} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_3} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_3} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} />
					</div>
				</Slider>
			</div>

			{/* Medium Device */}
			<div className="w-screen hidden md:block lg:hidden">
				<Slider {...MD_settings}>
					<div>
						<ProductSlideImage image={slideImage_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_3} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_3} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_3} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} />
					</div>
				</Slider>
			</div>
			{/* Large Device */}
			<div className="w-screen hidden lg:block">
				<Slider {...LG_settings}>
					<div>
						<ProductSlideImage image={slideImage_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_3} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_3} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_3} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} />
					</div>
				</Slider>
			</div>
		</section>
	);
};

const ProductSlideImage = ({ image }) => {
	return (
		<div className="p-5 lg:p-11.5">
			<img
				src={image}
				alt="image"
				className="w-[117px] h-[92px] object-cover"
			/>
		</div>
	);
};

export default ProductSlider;
