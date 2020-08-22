import React from "react";

const Feed = () => {
	function importAll(r) {
		return r.keys().map(r);
	}

	const images = importAll(
		require.context("../Images", false, /\.(png|jpe?g|svg)$/)
	);
	return <div>test</div>;
};

export default Feed;
