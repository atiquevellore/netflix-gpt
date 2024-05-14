export const FieldValidation = (name, email, password) => {
	console.log("password", password);
	const isNameValid = /^([a-zA-Z'-.]+ [a-zA-Z'-.]+)$/.test(name);
	const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
	const isPasswordValid =
		/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
			password
		);

	if (name && !isNameValid) return "Full Name is not Valid";

	if (!isEmailValid) return "Email is not Valid";

	if (!isPasswordValid) return "Password is not Valid";

	return null;
};
