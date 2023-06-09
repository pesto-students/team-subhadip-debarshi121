// Your solution goes here
const isStrongPassword = (password) => {
	password = password.toString();
	if (password.length >= 8) {
		if (password.toLowerCase() !== "password") {
			if (/[A-Z]/.test(password)) {
				return true;
			}
		}
	}
	return false;
};