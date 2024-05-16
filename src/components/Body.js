import React, { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";

const Body = () => {
	const dispatch = useDispatch();
	const appRoutes = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
			children: [
				{
					path: "Home",
					element: <Login />,
				},
			],
		},
		{
			path: "/browse",
			element: <Browse />,
		},
	]);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;

				dispatch(
					addUser({
						uid: uid,
						email: email,
						fullName: displayName,
						photoURL: photoURL,
					})
				);
			} else {
				dispatch(removeUser());
			}
		});
	}, []);

	return <RouterProvider router={appRoutes}></RouterProvider>;
};

export default Body;
