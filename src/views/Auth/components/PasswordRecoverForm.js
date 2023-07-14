import { useState } from "react";
import Input from "../../../components/UI/Input/Input";
import { Link } from "react-router-dom";

const PasswordRecoverForm = () => {
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
				<Link to="/forgot-password">
					<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="36" height="36" rx="10" fill="#F0EEF5" />
						<path d="M19.9312 13.05L15.8562 17.125C15.3749 17.6063 15.3749 18.3938 15.8562 18.875L19.9312 22.95" stroke="#1C1B20" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</Link>
				<span className="back">Go Back</span>
			</div>

			<form className="form" onSubmit={onSubmit}>
				<div className="form-text">
					<h1 className="title">Password Recovery.</h1>
					<p className="description">Your email is confirmed. You can now enter a new password.</p>
				</div>

				<div>
					<Input label="New Password" name="password" placeholder="" type="password" onChange={(e) => updateForm(e, "password")} required />
					<Input label="Repeat Password" name="password" placeholder="" type="password" onChange={(e) => updateForm(e, "password")} required />
				</div>

				<div className="actions-container">
					<button className="recover-password">Recover the Password</button>
				</div>
			</form>
		</div>
	);
};

export default PasswordRecoverForm;
