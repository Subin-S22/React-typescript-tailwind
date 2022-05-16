import React from "react";
import Header from "../components/organisms/header";
import Feeds from "../components/organisms/feeds";
import Footer from "../components/organisms/footer";

const Home = () => {
	return (
		<>
			<Header />
			<div className="p-4 sm:flex sm:flex-wrap max-w-7xl">
				{Array(10)
					.fill(0)
					.map((_, index) => (
						<Feeds key={index} />
					))}
			</div>
			<Footer />
		</>
	);
};

export default Home;
