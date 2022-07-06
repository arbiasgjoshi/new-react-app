import styles from "./sectionTabs.module.scss";

const SectionTabs = ({ activeSection }) => {
  const switchSections = (val) => {
    switch (val) {
      case 1:
        return (
          <div className={styles.sectionWrapper}>
            <h1>Marvel</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt ornare massa eget egestas. Egestas quis ipsum
              suspendisse ultrices gravida dictum fusce ut. Viverra ipsum nunc
              aliquet bibendum enim facilisis gravida neque. Egestas diam in
              arcu cursus euismod quis viverra nibh. Cursus mattis molestie a
              iaculis. Sed nisi lacus sed viverra tellus in hac. Quis lectus
              nulla at volutpat diam ut venenatis tellus. Posuere sollicitudin
              aliquam ultrices sagittis. Molestie nunc non blandit massa.
              Ullamcorper malesuada proin libero nunc consequat. In ornare quam
              viverra orci sagittis eu volutpat odio facilisis. Arcu non sodales
              neque sodales ut etiam sit amet nisl. Ut ornare lectus sit amet.
              Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec.
              Bibendum neque egestas congue quisque egestas diam in arcu.
            </p>
          </div>
        );
      case 2:
        return (
          <div className={styles.sectionWrapper}>
            <h1>DC</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt ornare massa eget egestas. Egestas quis ipsum
              suspendisse ultrices gravida dictum fusce ut. Viverra ipsum nunc
              aliquet bibendum enim facilisis gravida neque. Egestas diam in
              arcu cursus euismod quis viverra nibh. Cursus mattis molestie a
              iaculis. Sed nisi lacus sed viverra tellus in hac. Quis lectus
              nulla at volutpat diam ut venenatis tellus. Posuere sollicitudin
              aliquam ultrices sagittis. Molestie nunc non blandit massa.
              Ullamcorper malesuada proin libero nunc consequat. In ornare quam
              viverra orci sagittis eu volutpat odio facilisis. Arcu non sodales
              neque sodales ut etiam sit amet nisl. Ut ornare lectus sit amet.
              Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec.
              Bibendum neque egestas congue quisque egestas diam in arcu.
            </p>
          </div>
        );
      case 3:
        return (
          <div className={styles.sectionWrapper}>
            <h1>Invictus</h1>
            <p>
              Vel eros donec ac odio tempor orci. Placerat orci nulla
              pellentesque dignissim enim sit amet venenatis. Magna ac placerat
              vestibulum lectus mauris ultrices eros in cursus. Adipiscing elit
              ut aliquam purus sit amet. Congue quisque egestas diam in arcu.
              Tincidunt ornare massa eget egestas purus viverra accumsan in
              nisl. Egestas dui id ornare arcu odio. Dis parturient montes
              nascetur ridiculus mus. Sem nulla pharetra diam sit amet. Lacus
              vel facilisis volutpat est velit egestas dui id ornare. Mauris
              ultrices eros in cursus turpis massa tincidunt. Enim diam
              vulputate ut pharetra sit. Tellus at urna condimentum mattis
              pellentesque id nibh. Volutpat est velit egestas dui id ornare
              arcu.
            </p>
          </div>
        );
      case 4:
        return (
          <div className={styles.sectionWrapper}>
            <h1>Anime</h1>
            <p>
              Vel eros donec ac odio tempor orci. Placerat orci nulla
              pellentesque dignissim enim sit amet venenatis. Magna ac placerat
              vestibulum lectus mauris ultrices eros in cursus. Adipiscing elit
              ut aliquam purus sit amet. Congue quisque egestas diam in arcu.
              Tincidunt ornare massa eget egestas purus viverra accumsan in
              nisl. Egestas dui id ornare arcu odio. Dis parturient montes
              nascetur ridiculus mus. Sem nulla pharetra diam sit amet. Lacus
              vel facilisis volutpat est velit egestas dui id ornare. Mauris
              ultrices eros in cursus turpis massa tincidunt. Enim diam
              vulputate ut pharetra sit. Tellus at urna condimentum mattis
              pellentesque id nibh. Volutpat est velit egestas dui id ornare
              arcu.
            </p>
          </div>
        );
      default:
        return "";
    }
  };
  return <div className="itemsWrapper">{switchSections(activeSection)}</div>;
};

export default SectionTabs;
