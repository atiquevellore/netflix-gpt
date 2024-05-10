import React from "react";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
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

	return <RouterProvider router={appRoutes}></RouterProvider>;
};

export default Body;
