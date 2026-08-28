import { useState } from "react";
import "./Login.css";

function Login() {
    const [isRegister, setIsRegister] = useState(false);

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: "",
        confirm_password: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (isRegister) {
            if (formData.password !== formData.confirm_password) {
                alert("Password does not match");
                return;
            }

            console.log("Registration:", formData);
            alert("Registration successful!");
        } else {
            console.log("Login:", {
                email: formData.email,
                password: formData.password
            });

            alert("Login submitted!");
        }
    }

    return (
        <div className="auth-page">

            <h1>User Login and Registration Form</h1><br></br>
            <div className="auth-box">
                {/* Login / Register tabs */}
                <div className="auth-tabs">
                    <button type="button" className={!isRegister ? "active" : ""} onClick={() => setIsRegister(false)}>
                    Login
                    </button>

                    <button type="button" className={isRegister ? "active" : ""} onClick={() => setIsRegister(true)}>
                        Register
                    </button>
                </div>

                <h3>{isRegister ? "Create Account" : "Welcome Back"}
                </h3>

                <form onSubmit={handleSubmit}>

                    {/* Registration only */}
                    {isRegister && (
                        <>
                            <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required/>
                            <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required/>
                        </>
                    )}

                    {/* Login = email OR phone */}
                    {!isRegister ? (
                        <input type="text"name="email" placeholder="Email or Phone Number" value={formData.email} onChange={handleChange} required/>
                    ) : (
                        <>
                            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
                            <input  type="tel" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required/>
                        </>
                    )}

                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} require />

                    {/* Registration only */}
                    {isRegister && (
                        <input type="password" name="confirm_password" placeholder="Confirm Password" value={formData.confirm_password} onChange={handleChange} required />
                    )}

                    <button type="submit" className="submit-btn">
                        {isRegister ? "Register" : "Login"}
                    </button>

                </form>

            </div>
        </div>
    );
}

export default Login;