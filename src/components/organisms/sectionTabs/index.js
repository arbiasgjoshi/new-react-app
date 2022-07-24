import styles from "./sectionTabs.module.scss";

const SectionTabs = ({ activeSection }) => {
  const switchSections = (val) => {
    switch (val) {
      case 1:
        return (
          <div className={styles.sectionWrapper}>
            <h1>Marvel</h1>
            <p>
              The Marvel Cinematic Universe (MCU) is an American media franchise
              and shared universe centered on a series of superhero films
              produced by Marvel Studios. The films are based on characters that
              appear in American comic books published by Marvel Comics. The
              franchise also includes television series, short films, digital
              series, and literature. The shared universe, much like the
              original Marvel Universe in comic books, was established by
              crossing over common plot elements, settings, cast, and
              characters.
            </p>
            <p>
              The first MCU film, Iron Man (2008), began Phase One of the
              series, which culminated in the 2012 crossover film The Avengers.
              Phase Two began with Iron Man 3 (2013) and concluded with Ant-Man
              (2015). Phase Three began with Captain America: Civil War (2016)
              and concluded with Spider-Man: Far From Home (2019). The first
              three phases in the franchise are collectively known as "The
              Infinity Saga". The films of Phase Four began with Black Widow
              (2021) and are set to conclude with Black Panther: Wakanda Forever
              (2022). The fourth, fifth, and sixth phases of the MCU will
              collectively make the second saga in the franchise, "The
              Multiverse Saga".
            </p>
          </div>
        );
      case 2:
        return (
          <div className={styles.sectionWrapper}>
            <h1>DC</h1>
            <p>
              The DC Universe (DCU) is the fictional shared universe where most
              stories in American comic book titles published by DC Comics take
              place. DC superheroes such as Superman, Batman, Wonder Woman,
              Martian Manhunter, The Flash, Green Lantern, Aquaman, and Green
              Arrow are from this universe, as well as teams such as the Justice
              League and the Teen Titans. It also contains well-known
              supervillains such as Lex Luthor, The Joker, Sinestro, Harley
              Quinn, Reverse-Flash, Darkseid, General Zod, The Penguin, the
              Riddler, Deathstroke, Ra’s al Ghul, Bane, Two-Face, and The
              Scarecrow. In context, the term "DC Universe" usually refers to
              the main DC continuity.
            </p>
            <p>
              The term "DC Multiverse" refers to the collection of all
              continuities within DC Comics publications. Within the Multiverse,
              the main DC Universe has gone by many names, but in recent years
              has been referred to by "Prime Earth" (not to be confused with
              "Earth Prime") or "Earth 0".
            </p>
            <p>
              The main DC Universe, as well as the alternate realities related
              to it, were quickly adapted to other media such as film serials or
              radio dramas. In subsequent decades, the continuity between all of
              these media became increasingly complex with certain storylines
              and events designed to simplify or streamline the more confusing
              aspects of characters' histories.
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
