import { Routes, Route } from "react-router-dom";
import Signup from "../views/Auth/Signup";
import Signin from "../views/Auth/Signin";
import ForgotPassword from "../views/Auth/ForgotPassword";
import PasswordRecover from "../views/Auth/PasswordRecover";

import Dashboard from "../views/Pages/Dashboard";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Signin />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/signin" element={<Signin />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/recover-password" element={<PasswordRecover />} />

			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	);
};

export default Router;
