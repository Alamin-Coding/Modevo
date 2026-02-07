import React, { useRef } from "react";
import Slider from "react-slick";
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

import color from "../assets/color.png";
import color_1 from "../assets/color-1.png";

// exclusive featured component

const ExclusiveFeatured = () => {
  const sliderRef = useRef(null);

  const settings = {
    // gap: 10,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed:1000,
    autoplaySpeed:1000,
    cssEase: "linear",
  };
  return (
    // section start
    <section>
      <div className="container py-12 relative">
        <h2 className="flex items-center justify-center font-medium text-[40px] ">
          Featured
        </h2> 
        <div className="py-[60px]">
        <Slider ref={sliderRef} {...settings}>
          <div>
            <ExclusiveFeaturedCard
              title="Relaxed Stitch Shirt"
              img={exclusive_1}
              colors={["#55483B", "#403D72", "#E5C2C3","#E6DDD6"]}
              text="ADD TO CART"
              showUnderline={true}
            />
          </div>

          <div>
            <ExclusiveFeaturedCard
              title="Off-Duty Denim Set"
              img={exclusive_3}
              colors={["#E5DCBF","#2B2A2F","#3A582C"]}
              text="$179.000"
            />
          </div>
          <div>
            <ExclusiveFeaturedCard
              title="Utility Pocket Tee"
              img={exclusive_2}
              colors={["#E5DCBF","#2B2A2F","#3A582C"]}
              text="$278.000"
            />
          </div>
          <div>
            <ExclusiveFeaturedCard
              title="Retro Crop Tank & Cargo"
              img={exclusive_4}
              colors={["#E5DCBF","#2B2A2F","#3A582C"]}
              text="$223.000"
            />
          </div>
          <div>
            <ExclusiveFeaturedCard
              title="Off-Duty Denim Set"
              img={exclusive_3}
              colors={["#E5DCBF","#2B2A2F","#3A582C"]}
              text="$179.000"
            />
          </div>
        </Slider>
 </div>
        {/* card header */}

        {/* <h2 className="flex items-center justify-center font-medium text-[40px] ">
          Featured
        </h2> */}

        {/* card design */}
        {/* 
        
         
      
      
        </div> */}

        {/* card slide button */}

        <span
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute left-[-2.5%] top-[45%] transform -translate-y-1/2"
        >
          <Button>
            <img src={left} alt="Left" />
          </Button>
        </span>

        <span
          onClick={() => sliderRef.current.slickNext()}
          className="absolute right-[-2.5%] top-[45%] transform -translate-y-1/2"
        >
          <Button>
            <img src={right} alt="Right" />
          </Button>
        </span>
        {/* card slide icon */}
        {/* <div className="flex justify-center items-center">
            <img src={fotter} alt="slide" />
        </div> */}
      </div>
    </section>
    // section end
  );
};

export default ExclusiveFeatured;
