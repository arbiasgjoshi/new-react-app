
import styles from './footer.module.scss';

const FooterComponent = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className="container">
        <p>Footer copyright info here</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
