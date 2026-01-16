import { useState, useEffect } from "react";
import "../css/navbar.css";
import CreateCapsule from "../ui/CreateCapsule";
import Dashboard from "../ui/Dashboard";
import About from "../ui/about";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [activeId, setActiveId] = useState<number>(1);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  const getStyle = (id: number) => ({
    background:
      activeId === id
        ? "linear-gradient(90deg, #9333ea, #7c3aed)"
        : "transparent",
    color: "white",
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out.");
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <p>Time Capsule</p>
        </div>

        <div className="nav-links">
          <ul>
            <li onClick={() => setActiveId(1)} style={getStyle(1)}>
              Home
            </li>

            <li onClick={() => setActiveId(2)} style={getStyle(2)}>
              Dashboard
            </li>

            <li onClick={() => setActiveId(3)} style={getStyle(3)}>
              About
            </li>
          </ul>
        </div>

        <div className="logout">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="mainContent">
        {activeId === 1 && <CreateCapsule />}
        {activeId === 2 && <Dashboard />}
        {activeId === 3 && <About />}
      </div>
    </>
  );
}

export default Navbar;
