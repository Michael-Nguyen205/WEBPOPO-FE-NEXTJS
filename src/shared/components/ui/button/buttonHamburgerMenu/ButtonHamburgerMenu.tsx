import React from "react";
import styles from "./buttonHamburgerMenu.module.scss"; // Import module SCSS

interface ButtonHamburgerMenuProps {
  toggleDropdown: () => void; // Định nghĩa kiểu cho prop toggleDropdown
}

const ButtonHamburgerMenu: React.FC<ButtonHamburgerMenuProps> = ({
  toggleDropdown,
}) => {
  return (
    <label htmlFor="check" className={styles.label}>
      <input
        type="checkbox"
        id="check"
        className={styles.checkbox}
        readOnly
        onClick={toggleDropdown} // Gán sự kiện click vào input
      />{" "}
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
    </label>
  );
};

export default ButtonHamburgerMenu;
