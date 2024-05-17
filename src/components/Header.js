import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/Slices/userSlice";
import { APP_LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector((store) => store.user);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {});
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
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
		return () => unSubscribe();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="absolute   z-10  w-screen  px-8 py-2 bg-gradient-to-b  from-black flex justify-between ">
			<div>
				<img className=" w-32 " src={APP_LOGO_URL} alt="logo" />
			</div>
			{user && (
				<div className=" flex z-10 ">
					<img src={user?.photoURL} alt="user icon" className="w-10 py-3" />
					<button
						className=" p-3  font-bold   text-white"
						onClick={handleSignOut}>
						SignOut
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
