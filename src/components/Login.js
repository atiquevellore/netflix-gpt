import React, { useState, useRef } from "react";
import Header from "./Header";
import { FieldValidation } from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { HOMEPAGE_BG_URL, USER_PROFILE_URL } from "../utils/constants";

const Login = () => {
	const [isSign, SetIsSign] = useState(true);
	const [errorMessage, SetErrorMessage] = useState(null);

	const FullName = useRef(null);
	const Email = useRef(null);
	const Password = useRef(null);
	const toggleSignInForm = () => {
		SetErrorMessage(null);
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
		SetErrorMessage(message);
		if (errorMessage) return;

		if (!isSign) {
			createUserWithEmailAndPassword(
				auth,
				Email.current.value,
				Password.current.value
			)
				.then(() => {
					updateProfile(auth.currentUser, {
						displayName: FullName.current.value,
						photoURL: USER_PROFILE_URL,
					})
						.then(() => {})
						.catch((error) => {});
				})
				.catch((error) => {
					SetErrorMessage(error.message);
				});
		} else {
			signInWithEmailAndPassword(
				auth,
				Email.current.value,
				Password.current.value
			)
				.then(() => {})
				.catch((error) => {
					SetErrorMessage(error.message);
				});
		}
	};
	return (
		<>
			<Header />
			<div className="absolute ">
				<img className=" bg-fixed" alt="bg" src={HOMEPAGE_BG_URL} />
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
