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
      <a href="">
        <img src={Instagram} />
      </a>
      <a href="">
        <img src={Facebook} />
      </a>
      <a href="">
        <img src={Youtube} />
      </a>
      <a href="">
        <img src={Twiter} />
      </a>
      <h6>copyright © 2022-2023 CTS</h6>
    </footer>
  );
};

export default FooterComponent;
