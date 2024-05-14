import React, { useState, useRef } from "react";
import Header from "./Header";
import { FieldValidation } from "../utils/validate";

const Login = () => {
	const [isSign, SetIsSign] = useState(true);
	const [errorMessage, SetErrorMessage] = useState(null);

	const FullName = useRef(null);
	const Email = useRef(null);
	const Password = useRef(null);
	const toggleSignInForm = () => {
		SetIsSign(!isSign);
	};

	const validateForm = () => {
		const message = isSign
			? FieldValidation(undefined, Email.current.value, Password.current.value)
			: FieldValidation(
					FullName.current.value,
					Email.current.value,
					Password.current.value
			  );
		console.log("message", message);
		SetErrorMessage(message);
	};
	return (
		<>
			<Header />
			<div className="absolute ">
				<img
					className=" bg-fixed"
					alt="bg"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
				/>
			</div>
			<form
				className="  my-36 mx-auto right-0 left-0  w-3/12 absolute bg-black  text-white bg-opacity-80 rounded-lg"
				onSubmit={(event) => event.preventDefault()}>
				<h1 className=" mx-10 py-3 my-2 text-3xl font-bold">
					{isSign ? "Sign In" : "Sign Up"}
				</h1>
				{!isSign && (
					<input
						type="text"
						placeholder="Full Name"
						ref={FullName}
						className="mx-10 p-3 my-3 w-4/5 bg-gray-600  bg-opacity-40 rounded-lg"
					/>
				)}
				<input
					type="email"
					placeholder="Email"
					ref={Email}
					className="mx-10 p-3 my-3 w-4/5 bg-gray-600  bg-opacity-40 rounded-lg"
				/>
				<input
					type="password"
					placeholder="Password"
					ref={Password}
					className="mx-10 p-3  my-3 w-4/5 bg-gray-600 bg-opacity-40 rounded-lg"
				/>

				{errorMessage && (
					<p className=" text-red-500 font-bold mx-10 px-3 ">{errorMessage}</p>
				)}
				<button
					className="mx-10 p-2 my-2 bg-red-600 w-4/5 rounded-lg text-lg "
					onClick={validateForm}>
					{isSign ? "Sign In" : "Sign Up"}
				</button>
				<p className="mx-10 p-4  cursor-pointer" onClick={toggleSignInForm}>
					{isSign
						? "New to Netflix? Sign Up Now"
						: "Already Registered?, Sign In Now"}
				</p>
			</form>
		</>
	);
};

export default Login;
