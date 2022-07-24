import { useState } from "react";

import LeftNav from "../../components/molecules/leftNav";
import SectionTabs from "../../components/organisms/sectionTabs";

import styles from "./home.module.scss";
import mainStyles from "../../styles/main.module.scss";

const Homepage = () => {
  const [section, setSection] = useState(1);

  return (
    <div className={mainStyles.mainWrapper}>
      <div className="container">
        <div className={styles.groupedItems}>
          <LeftNav changeSection={(value) => setSection(value)} />
          <SectionTabs activeSection={section} />
        </div>
      </div>   
    </div>
  );
};
export default Homepage;
