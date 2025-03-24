import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaUserCircle, FaCaretDown, FaSignOutAlt } from "react-icons/fa";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isOpen || isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isMobileMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* Logo or brand can go here if needed */}
      </div>

      {/* Desktop view (No changes) */}
      <div className={styles.desktopRightSection}>
        <div className={styles.searchBar}>
          <FaSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search..." className={styles.searchInput} />
        </div>
        <div className={styles.userSection}>
          <FaUserCircle className={styles.profileIcon} />
          <span className={styles.username}>John Doe</span>
          <div 
            className={styles.dropdown} 
            onClick={() => setIsOpen(!isOpen)}
            ref={dropdownRef}
          >
            <FaCaretDown className={styles.dropdownIcon} />
            {isOpen && (
              <ul className={styles.dropdownMenu}>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Mobile view (Updated: Logout Icon instead of Hamburger, Search on Left) */}
      <div className={styles.mobileTopBar}>
        <div className={styles.mobileSearchIcon}>
          <FaSearch />
        </div>
        <div className={styles.mobileUserInfo}>
          <FaUserCircle className={styles.mobileProfileIcon} />
          <span className={styles.mobileUsername}>John Doe</span>
        </div>
        <div 
          className={styles.mobileLogout} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          ref={mobileMenuRef}
        >
          <FaSignOutAlt />
   
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
