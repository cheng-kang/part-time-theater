import { collection, getDocs, orderBy, query, Timestamp } from "@firebase/firestore";
import { isBefore } from "date-fns";
import React from "react";
import { firestore } from "../firebase";

export interface Showtime {
  id: string;
  dvd: string;
  datetime: Date;
}

export function useShowtimeList() {
  const [list, setList] = React.useState<Showtime[] | undefined>(undefined);

  React.useEffect(() => {
    getDocs(
      query(collection(firestore, "showtime"), orderBy("datetime", "desc"))
    ).then((snapshot) => {
      setList(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            dvd: doc.get("dvd"),
            datetime: (doc.get("datetime") as Timestamp).toDate(),
          };
        })
      );
    });
  }, []);

  return React.useMemo(() => {
    if (list === undefined) {
      return { upcoming: undefined, past: undefined };
    }
    const upcoming: Showtime[] = [];
    const past: Showtime[] = [];
    const now = new Date();
    list.forEach((item) => {
      if (isBefore(item.datetime, now)) {
        past.push(item);
      } else {
        upcoming.push(item);
      }
    });
    return { upcoming, past };
  }, [list]);
}
