import WhiteButton from "../WhiteButton";

const TodayDeal = () => {
  return (
    <section className="max-w-7xl mx-auto h-222.5 mb-5">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          Today Deal
        </p>
        <h2 className="text-3xl font-semibold mt-2">
          Deal Of The Day
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Limited-time styles at unbeatable prices. Shop today’s hottest picks before they’re gone!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        <div className="lg:col-span-2 bg-gray-200 h-178 p-8 flex items-start relative">
          <div className="absolute lg:relative top-12.5 left-12.5">
            <span className="text-sm font-medium text-gray-700">
              Flat 20% Discount
            </span>
            <h3 className="text-2xl font-semibold mt-2">
              Don’t Miss Today’s <br /> Exclusive Picks
            </h3>
            <p className="text-gray-600 mt-2">
              Casual, cool, and always in style.
            </p>

            <WhiteButton className="mt-4 px-4 py-2">
                SHOP NOW →
            </WhiteButton>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-gray-200 h-85 flex items-center relative">
            <div className="absolute top-12.5 left-12">
              <span className="text-sm text-gray-700">
                Flat 30% Discount
              </span>
              <h3 className="text-xl font-semibold mt-1">
                Playful Kids Tee
              </h3>

              <WhiteButton className="mt-4 px-4 py-2">
                SHOP NOW →
              </WhiteButton>
            </div>
          </div>
          <div className="bg-gray-200 h-85 p-6 flex items-center relative">
            <div className="absolute top-12.5 left-12">
              <span className="text-sm text-gray-700">
                Flat 30% Discount
              </span>
              <h3 className="text-xl font-semibold mt-1">
                Rust Belted Trench
              </h3>

              <WhiteButton className="mt-4 px-4 py-2">
                SHOP NOW →
              </WhiteButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TodayDeal;
