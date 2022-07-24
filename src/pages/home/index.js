import { useState } from "react";

import LeftNav from "../../components/molecules/leftNav";
import SectionTabs from "../../components/organisms/sectionTabs";
import ImageComponent from "../../components/atoms/featuredImage";

import styles from "./home.module.scss";
import mainStyles from "../../styles/main.module.scss";

const Homepage = () => {
  const [section, setSection] = useState(1);

  return (
    <div className={mainStyles.mainWrapper}>
      <div className="container">
        <div className={styles.groupedItems}>
          <div className={styles.leftItems}>
            <LeftNav changeSection={(value) => setSection(value)} />
          </div>
          <div className={styles.rightItems}>
            <ImageComponent featuredImage={section} />
            <SectionTabs activeSection={section} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
