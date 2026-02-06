import slideImage_1 from "../assets/product-slide (1).jpg";
import slideImage_2 from "../assets/product-slide (2).jpg";
import slideImage_3 from "../assets/product-slide (3).jpg";
import Slider from "react-slick";

const ProductSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 1,
		cssEase: "linear",
	};
	return (
		<section>
			<div className="w-screen">
				<Slider {...settings}>
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
		<div className="p-11.5">
			<img
				src={image}
				alt="image"
				className="w-[117px] h-[92px] object-cover"
			/>
		</div>
	);
};

export default ProductSlider;
