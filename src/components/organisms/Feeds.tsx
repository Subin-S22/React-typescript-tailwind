import React from "react";

const Feeds: React.FC = () => {
	return (
		<div className="shadow-lg rounded-lg p-4 sm:basis-1/2 flex-grow flex-shrink-0 md:basis-1/3 lg:basis-1/4 min-w-20 xl:basis-1/6 2xl:basis-1/12">
			<div className="flex justify-between">
				<div className="text-sm text-gray-400">by Unknown</div>
				<div className="text-sm text-gray-400">
					{new Date().toLocaleDateString()}
				</div>
			</div>
			<div className="text-lg text-black font-bold font-display">
				heading
			</div>
			<div className="line-clamp-3 text-md font-kalam tracking-tight leading-[1.25rem]">
				If there is a forest, then there always be a lion, tiger and
				leopard. and there will be a survival of the fittest
			</div>
		</div>
	);
};

export default Feeds;
