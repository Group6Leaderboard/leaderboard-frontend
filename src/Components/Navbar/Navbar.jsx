import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaUserCircle, FaCaretDown, FaSignOutAlt, FaUser } from "react-icons/fa";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import styles from "./navbar.module.css";

const Navbar = ({ userType, userData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const searchInputRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    

    if (isOpen || isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsProfileModalOpen(false);
    }
  };

  if (isOpen || isProfileModalOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  }



    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isMobileMenuOpen, isProfileModalOpen]);
  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      </div>

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
                <li onClick={() => setIsProfileModalOpen(true)}>
                  <FaUser className={styles.menuIcon} />Profile</li>
               
                <li>
                <FaSignOutAlt className={styles.menuIcon} />
                  Logout</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className={styles.mobileTopBar}>
      {/* <div 
          className={styles.mobileSearchIcon} 
          onClick={() => setShowMobileSearch(!showMobileSearch)}
        >
          <FaSearch />
        </div>
        {showMobileSearch && (
          <div className={styles.mobileSearchBar} ref={searchInputRef}>
            <input type="text" placeholder="Search..." className={styles.mobileSearchInput} autoFocus />
          </div>
        )} */}
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
    {isProfileModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent} ref={modalRef}>
            <button className={styles.closeButton} onClick={() => setIsProfileModalOpen(false)}>
              ✖
            </button>
            <ProfileEdit userType={userType} userData={userData} />
          </div>
        </div>
      )}
    </> 
  );
};

export default Navbar;
