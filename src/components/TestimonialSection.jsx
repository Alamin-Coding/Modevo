import React from "react";
import Section from "./Section";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import PortfolioCard from "./PortfolioCard";

const TestimonialSection = () => {
	return (
		<Section className={"py-22"}>
			<Container>
				<div class="text-center mb-12">
					<p class="mt-3 text-gray-500 max-w-2xl mx-auto">Portfolio</p>
					<h2 class="text-3xl font-semibold text-gray-900">
						What our customers say
					</h2>
				</div>
				<div className="grid grid-cols-4 gap-6">
					<PortfolioCard />
					<PortfolioCard />
					<PortfolioCard />
					<PortfolioCard />
				</div>
			</Container>
		</Section>
	);
};

export default TestimonialSection;
