import "../css/login.css";
import api from "../api/axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", response.data.token);

      console.log("Login successful");

      navigate("/dashboard"); 
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password");
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

        <div className="login-left">
          <h2>Login</h2>

          <form onSubmit={submit}>
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

            {error && <p className="error-message">{error}</p>}

            <button type="submit">
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="signup-text">
            Don’t have an account?{" "}
            <Link to="/signup">
              <span>Sign Up</span>
            </Link>
          </p>
        </div>

        <div className="login-right">
          <h1>WELCOME<br />BACK!</h1>
          <p>
            Login to continue preserving your digital memories for the future.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;
