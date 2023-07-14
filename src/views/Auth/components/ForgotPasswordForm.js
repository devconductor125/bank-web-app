import { useState } from "react";
import Input from "../../../components/UI/Input/Input";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
	const [form, setForm] = useState({});

	const updateForm = (e, field) => {
		setForm({
			...form,
			[field]: e.target.value,
		});
	};

	const onSubmit = () => {};

	return (
		<div className="form-container">
			<div className="logo flex items-center">
				<Link to="/signin">
					<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="36" height="36" rx="10" fill="#F0EEF5" />
						<path d="M19.9312 13.05L15.8562 17.125C15.3749 17.6063 15.3749 18.3938 15.8562 18.875L19.9312 22.95" stroke="#1C1B20" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</Link>
				<span className="back">Go Back</span>
			</div>

			<form className="form" onSubmit={onSubmit}>
				<div className="form-text">
					<h1 className="title">Forgot your password?</h1>
					<p className="description">Write your email and we will send instructions on how to recover your password.</p>
				</div>

				<div>
					<Input label="Email" name="email" placeholder="email@example.com" type="email" onChange={(e) => updateForm(e, "email")} required />
				</div>

				<div className="actions-container">
					<Link to="/recover-password" className="instruction">
						<button className="send-instruction">Sent the Instructions</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default ForgotPasswordForm;
