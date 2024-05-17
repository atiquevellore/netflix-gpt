import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			console.log("current user :", auth.currentUser);
			if (user) {
				const { uid, email, displayName, photoURL } = auth.currentUser;

				dispatch(
					addUser({
						uid: uid,
						email: email,
						fullName: displayName,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="absolute   z-10  w-screen  px-8 py-2 bg-gradient-to-b  from-black ">
			<img
				className=" w-32 "
				src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
				alt="logo"
			/>
		</div>
	);
};

export default Header;
