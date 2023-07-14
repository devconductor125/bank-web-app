import { useState } from "react";
import Input from "../../../components/UI/Input/Input";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
	const [form, setForm] = useState({});
	const navigate = useNavigate();
	const updateForm = (e, field) => {
		setForm({
			...form,
			[field]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log("adfasdf");

		navigate("/dashboard");
		// window.location.href("/dashboard");
	};

	return (
		<div className="form-container">
			<div className="logo">
				Banking <span className="app-text">App</span>
			</div>

			<form className="form" onSubmit={onSubmit}>
				<div className="form-text">
					<h1 className="title">Sign In</h1>
					<p className="description">We are happy to see you again!</p>
				</div>

				<div>
					<Input label="Email" name="email" placeholder="email@example.com" type="email" onChange={(e) => updateForm(e, "email")} required />
					<Input label="Password" name="password" placeholder="" type="password" onChange={(e) => updateForm(e, "password")} required />
				</div>

				<div className="forgot-password">
					<a href="/forgot-password">Forgot Password?</a>
				</div>

				<div className="actions-container">
					<button className="signin-button-1" type="submit">
						Sign In
					</button>
					<Link to="/signup">
						<button className="signup-button-1">Sign Up</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignupForm;
