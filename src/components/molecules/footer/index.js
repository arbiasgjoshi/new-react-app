import styles from "./footer.module.scss";
import Instagram from "./../../../images/instagram.png";
import Facebook from "./../../../images/facebook.png";
import Youtube from "./../../../images/youtube.png";
import Twiter from "./../../../images/twiter.png";
const FooterComponent = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className="container">
        <h2>Footer copyright info here</h2>
      </div>
      <p>You can contact us</p>
      <a href="https://instagram.com">
        <img src={Instagram} alt="Social Icon Instagram" />
      </a>
      <a href="https://facebook.com">
        <img src={Facebook} alt="Social Icon Facebook" />
      </a>
      <a href="https://youtube.com">
        <img src={Youtube} alt="Social Icon Youtube" />
      </a>
      <a href="https://twitter.com">
        <img src={Twiter} alt="Social Icon Twitter" />
      </a>
      <h6>copyright © 2022-2023 CTS</h6>
    </footer>
  );
};

export default FooterComponent;
