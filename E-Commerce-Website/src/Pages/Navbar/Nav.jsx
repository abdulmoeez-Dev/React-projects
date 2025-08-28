import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa"; 
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link to="/Home">
          <FaShoppingBag className={styles.logoIcon} /> ShopZone
        </Link>
      </div>

      {/* Toggle Button (Hamburger) */}
      <div className={styles.menuToggle} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.activeMenu : ""}`}>
        <li>
          <NavLink 
            to="/Home" 
            className={({ isActive }) => isActive ? styles.active : undefined}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Product" 
            className={({ isActive }) => isActive ? styles.active : undefined}
            onClick={() => setIsOpen(false)}
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
