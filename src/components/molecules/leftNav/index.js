import { useState } from "react";
import styles from "./leftNav.module.scss";

const LeftNav = ({ changeSection }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* If open is false and we click, open value changes to true and vice versa */}
      <button className={styles.menuToggler} onClick={() => setOpen(!open)}>
        <i className={`fa ${open ? "fa-close" : "fa-bars"}`}></i>
      </button>
      <nav
        className={`${styles.leftNavWrapper} ${open ? styles.menuOpened : ""}`}
      >
        <button type="button" onClick={() => changeSection(1)}>
          Marvel
        </button>
        <button type="button" onClick={() => changeSection(2)}>
          DC
        </button>
        <button type="button" onClick={() => changeSection(3)}>
          Naruto
        </button>
        <button type="button" onClick={() => changeSection(4)}>
          Saint Seiya
        </button>
      </nav>
    </>
  );
};

export default LeftNav;
