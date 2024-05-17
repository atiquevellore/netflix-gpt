import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/Slices/moviesSlice";

const Browse = () => {
	const dispatch = useDispatch();
	const getNowPlayingMovies = async () => {
		const data = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);
		const json = await data.json();
		console.log(json.results);
		dispatch(addNowPlayingMovies(json.results));
	};

	useEffect(() => {
		getNowPlayingMovies();
	}, []);
	return (
		<div className=" flex justify-between">
			<div>
				<Header />
			</div>
		</div>
	);
};

export default Browse;
