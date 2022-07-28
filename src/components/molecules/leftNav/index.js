import styles from "./leftNav.module.scss";

const LeftNav = ({ changeSection }) => {
  return (
    <>
      <nav className={styles.leftNavWrapper}>
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
