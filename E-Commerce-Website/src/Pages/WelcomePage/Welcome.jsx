import "./welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">✨ Welcome to Our Store ✨</h1>
        <p className="welcome-subtitle">
          Discover amazing products, great prices, and a smooth shopping experience.
        </p>
        <Link to="/Product" className="welcome-btn">
          Start Shopping 🚀
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
