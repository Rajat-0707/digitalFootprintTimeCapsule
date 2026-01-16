import "../css/login.css";
import api from "../api/axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setLoading(false);
      return setError("Passwords do not match");
    }

    try {
      const response = await api.post("/signup", {
        name: formData.username, 
        email: formData.email,
        password: formData.password,
      });

      console.log("Signup successful:", response.data);

      navigate("/login");
    } catch (err) {
      alert("Email already exists.");
      console.error("Signup error:", err);
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  return (
    <div className="container">
        <div className="backbutton">
        <Link to="/">
          <span>← Back to Home</span>
        </Link>
      </div>
      <div className="login-wrapper">

        <div className="login-right signup-right">
          <h1>JOIN US!</h1>
          <p>
            Create your account and <br />
            start your journey.
          </p>
        </div>

        <div className="login-left signup-left">
          <h2>Sign Up</h2>

          <form onSubmit={submit}>
            <div className="form-group">
              <label>Username</label>
              <input
                name="username"
                value={formData.username}
                onChange={onChange}
                type="text"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={onChange}
                type="email"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                value={formData.password}
                onChange={onChange}
                type="password"
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                name="confirmPassword" 
                value={formData.confirmPassword}
                onChange={onChange}
                type="password"
                required
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit">
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="signup-text">
            Already have an account?{" "}
            <Link to="/login">
              <span>Login</span>
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Signup;
