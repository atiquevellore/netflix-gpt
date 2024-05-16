import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	console.log(user);
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {});
	};
	return (
		<div className=" flex justify-between">
			<div>
				<Header />
			</div>
			{user && (
				<div className=" flex z-10 ">
					<img
						src={user?.photoURL}
						alt="user icon"
						className="    rounded-full w-16 py-5"
					/>
					<button className=" p-4  font-bold  " onClick={handleSignOut}>
						SignOut
					</button>
				</div>
			)}
		</div>
	);
};

export default Browse;
