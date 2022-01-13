import clsx from "clsx";
import { format } from "date-fns";
import React from "react";
import { useDvdList, Dvd } from "../../../hooks/useDvdList";
import { useShowtimeList } from "../../../hooks/useShowtimeList";
import "./List.css";

const List: React.FC = () => {
  const [tab, setTab] = React.useState<"upcoming" | "past" | "lib">("upcoming");
  const showtimeList = useShowtimeList();
  const dvdList = useDvdList();
  const dvdMap = React.useMemo<{ [key in string]: Dvd }>(() => {
    if (dvdList === undefined) return {};
    return dvdList.reduce((acc, cur) => ({ ...acc, [cur.id]: { ...cur } }), {});
  }, [dvdList]);

  return (
    <div className="list">
      <div className="list__tab-container">
        <h2
          className={clsx(
            "list__tab",
            tab === "upcoming" && "list__tab--active"
          )}
          onClick={() => setTab("upcoming")}
        >
          Upcoming
        </h2>
        <h2
          className={clsx("list__tab", tab === "past" && "list__tab--active")}
          onClick={() => setTab("past")}
        >
          Past
        </h2>
        <h2
          className={clsx("list__tab", tab === "lib" && "list__tab--active")}
          onClick={() => setTab("lib")}
        >
          Lib
        </h2>
      </div>
      <div className="list__items-container">
        {tab === "upcoming" &&
          (showtimeList === undefined || showtimeList.upcoming === undefined ? (
            <div className="items-container__item--empty">Loading...</div>
          ) : showtimeList.upcoming.length === 0 ? (
            <div className="list__items-container__item--empty">
              Nothing yet.
            </div>
          ) : (
            showtimeList.upcoming.map((item) => {
              const dvd = dvdMap[item.dvd];
              console.log(item);
              if (!dvd)
                return (
                  <div
                    className="list__items-container__item--empty"
                    key={item.id}
                  >
                    -
                  </div>
                );
              return (
                <div
                  className="list__items-container__showtime-item"
                  key={item.id}
                >
                  <div>{dvd.title}</div>
                  <div>{format(item.datetime, "HH:mm MMM do")}</div>
                </div>
              );
            })
          ))}
        {tab === "past" &&
          (showtimeList === undefined || showtimeList.past === undefined ? (
            <div className="list__items-container__item--empty">Loading...</div>
          ) : showtimeList.past.length === 0 ? (
            <div className="list__items-container__item--empty">
              Nothing yet.
            </div>
          ) : (
            showtimeList.past.map((item) => {
              const dvd = dvdMap[item.dvd];
              if (!dvd)
                return (
                  <div
                    className="list__items-container__item--empty"
                    key={item.id}
                  >
                    -
                  </div>
                );
              return (
                <div
                  className="list__items-container__showtime-item"
                  key={item.id}
                >
                  <div>{dvd.title}</div>
                  <div>{format(item.datetime, "HH:mm MMM do")}</div>
                </div>
              );
            })
          ))}
        {tab === "lib" &&
          (dvdList === undefined ? (
            <div className="list__items-container__item--empty">Loading...</div>
          ) : dvdList.length === 0 ? (
            <div className="list__items-container__item--empty">
              Nothing yet.
            </div>
          ) : (
            dvdList.map((item) => (
              <div className="list__items-container__item" key={item.id}>
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
  );
};

export default List;
