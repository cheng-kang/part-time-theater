import React from "react";
import clsx from "clsx";
import styles from "./Home.module.scss";
import { useDvdList, Dvd } from "../../hooks/useDvdList";
import { useShowtimeList } from "../../hooks/useShowtimeList";
import { format } from "date-fns";

const Home = () => {
  const [tab, setTab] = React.useState<"upcoming" | "past" | "lib">("lib");
  const showtimeList = useShowtimeList();
  const dvdList = useDvdList();
  const dvdMap = React.useMemo<{ [key in string]: Dvd }>(() => {
    if (dvdList === undefined) return {};
    return dvdList.reduce((acc, cur) => ({ ...acc, [cur.id]: { ...cur } }), {});
  }, [dvdList]);
  const hasUpcomingShow =
    showtimeList.upcoming && showtimeList.upcoming.length > 0;

  React.useEffect(() => {
    if (hasUpcomingShow) {
      setTab("upcoming");
    }
  }, [hasUpcomingShow]);

  return (
    <div className={styles.container}>
      <h1
        className={clsx(
          styles.title,
          hasUpcomingShow && styles["title--active"]
        )}
        data-shadow="Part-time Theater"
      >
        Part-time
        <br />
        Theater
      </h1>
      <span className={styles.quote}>
        "From the point of view of feeling, the actor's craft is the type."
      </span>
      <div className={styles.main}>
        <div className={styles.tabs}>
          <div
            className={clsx(
              styles.tab,
              tab === "upcoming" && styles["tab--active"]
            )}
            onClick={() => {
              setTab("upcoming");
            }}
          >
            Upcoming
          </div>
          <div
            className={clsx(
              styles.tab,
              tab === "past" && styles["tab--active"]
            )}
            onClick={() => {
              setTab("past");
            }}
          >
            Past
          </div>
          <div
            className={clsx(styles.tab, tab === "lib" && styles["tab--active"])}
            onClick={() => {
              setTab("lib");
            }}
          >
            Lib
          </div>
        </div>
        <div className={styles.list}>
          {tab === "upcoming" &&
            (showtimeList === undefined ||
            showtimeList.upcoming === undefined ? (
              <div className={styles["list-items-container__item--empty"]}>
                Loading...
              </div>
            ) : showtimeList.upcoming.length === 0 ? (
              <div className={styles["list__items-container__item--empty"]}>
                Nothing yet.
              </div>
            ) : (
              showtimeList.upcoming.map((item) => {
                const dvd = dvdMap[item.dvd];
                if (!dvd)
                  return (
                    <div
                      className={styles["list__items-container__item--empty"]}
                      key={item.id}
                    >
                      -
                    </div>
                  );
                return (
                  <div
                    className={styles["list__items-container__showtime-item"]}
                    key={item.id}
                  >
                    <a href={dvd.titleIMDb} rel="noreferrer" target="_blank">
                      {dvd.title} ({dvd.year})
                    </a>
                    <div>{format(item.datetime, "HH:mm MMM do ''yy")}</div>
                  </div>
                );
              })
            ))}
          {tab === "past" &&
            (showtimeList === undefined || showtimeList.past === undefined ? (
              <div className={styles["list__items-container__item--empty"]}>
                Loading...
              </div>
            ) : showtimeList.past.length === 0 ? (
              <div className={styles["list__items-container__item--empty"]}>
                Nothing yet.
              </div>
            ) : (
              showtimeList.past.map((item) => {
                const dvd = dvdMap[item.dvd];
                if (!dvd)
                  return (
                    <div
                      className={styles["list__items-container__item--empty"]}
                      key={item.id}
                    >
                      -
                    </div>
                  );
                return (
                  <div
                    className={styles["list__items-container__showtime-item"]}
                    key={item.id}
                  >
                    <a href={dvd.titleIMDb} rel="noreferrer" target="_blank">
                      {dvd.title} ({dvd.year})
                    </a>
                    <div>{format(item.datetime, "HH:mm MMM do ''yy")}</div>
                  </div>
                );
              })
            ))}
          {tab === "lib" &&
            (dvdList === undefined ? (
              <div className={styles["list__items-container__item--empty"]}>
                Loading...
              </div>
            ) : dvdList.length === 0 ? (
              <div className={styles["list__items-container__item--empty"]}>
                Nothing yet.
              </div>
            ) : (
              dvdList.map((item) => (
                <div
                  className={styles["list__items-container__item"]}
                  key={item.id}
                >
                  <a href={item.titleIMDb} rel="noreferrer" target="_blank">
                    {item.title} ({item.year})
                  </a>
                  <a href={item.directorIMDb} rel="noreferrer" target="_blank">
                    {item.director}
                  </a>
                </div>
              ))
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
