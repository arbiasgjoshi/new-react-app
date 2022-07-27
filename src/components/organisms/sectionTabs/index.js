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
            <h1>Naruto</h1>
            <p>
              Naruto (Japanese: NARUTOナルト) is a Japanese manga series written
              and illustrated by Masashi Kishimoto. It tells the story of Naruto
              Uzumaki, a young ninja who seeks recognition from his peers and
              dreams of becoming the Hokage, the leader of his village. The
              story is told in two parts – the first set in Naruto's pre-teen
              years, and the second in his teens. The series is based on two
              one-shot manga by Kishimoto: Karakuri (1995), which earned
              Kishimoto an honorable mention in Shueisha's monthly Hop Step
              Award the following year, and Naruto (1997).
            </p>
            <p>
              Naruto was serialized in Shueisha's magazine, Weekly Shōnen Jump
              from 1999 to 2014, and released in tankōbon (book) form in 72
              volumes. The manga was adapted into an anime television series
              produced by Pierrot and Aniplex, which broadcast 220 episodes in
              Japan from 2002 to 2007; the English dub of the series aired on
              Cartoon Network and YTV from 2005 to 2009. Naruto: Shippuden, a
              sequel to the original series, premiered in Japan in 2007, and
              ended in 2017, after 500 episodes. The English dub was broadcast
              on Disney XD from 2009 to 2011, airing the first 98 episodes, and
              then switched over to Adult Swim's Toonami programming block in
              January 2014, starting over from the first episode. The English
              dub is still airing weekly on Adult Swim to this day. Viz Media
              began streaming the anime series on their streaming service Neon
              Alley in December 2012 on 99 episodes, and ended in March 2016,
              after 338 episodes. Besides the anime series, Pierrot has
              developed eleven movies and twelve original video animations
              (OVAs). Other Naruto-related merchandise includes light novels,
              video games, and trading cards developed by several companies.
            </p>
          </div>
        );
      case 4:
        return (
          <div className={styles.sectionWrapper}>
            <h1>Saint Seiya</h1>
            <p>
              Saint Seiya (Japanese: 聖闘士星矢セイントセイヤ, Hepburn: Seinto
              Seiya), also known as Saint Seiya: Knights of the Zodiac or simply
              Knights of the Zodiac (translated from the French title Les
              Chevaliers du Zodiaque),[5] is a Japanese manga series written and
              illustrated by Masami Kurumada. It was serialized in Shueisha's
              shōnen manga magazine Weekly Shōnen Jump from 1986 to 1990, with
              its chapters collected in twenty-eight tankōbon volumes. The story
              follows five mystical warriors called the Saints who fight wearing
              sacred sets of armor named "Cloths", the designs of which derive
              from the various constellations the characters have adopted as
              their destined guardian symbols, and empowered by a mystical
              energy called "Cosmo". The Saints have sworn to defend the
              reincarnation of the Greek goddess Athena in her battle against
              other Olympian gods who want to dominate Earth.
            </p>
            <p>
              The manga was adapted by Toei Animation into a 114-episode anime
              television series which was broadcast on TV Asahi from 1986 to
              1989. Saint Seiya was later continued with three original video
              animations released from 2002 to 2008. Four animated feature films
              premiered in Japanese theaters from 1987 to 1989, with a fifth in
              2004 and a sixth in 2014. A live-action film adaptation will be
              released in 2023. Since 2006, Kurumada has been publishing a
              sequel manga titled Saint Seiya: Next Dimension. Several spin-off
              manga by different authors have also been created, as well as a
              standalone anime series and two original net animation series.
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
