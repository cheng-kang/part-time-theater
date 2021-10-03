import { collection, getDocs } from "@firebase/firestore";
import React from "react";
import { firestore } from "../firebase";

export interface Dvd {
  id: string;
  title: string;
  titleIMDb: string;
  director: string;
  directorIMDb: string;
  year: number;
}

export function useDvdList() {
  const [list, setList] = React.useState<Dvd[] | undefined>(undefined);

  React.useEffect(() => {
    getDocs(collection(firestore, "dvd")).then((snapshot) => {
      setList(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            title: doc.get("title"),
            titleIMDb: doc.get("titleIMDb"),
            director: doc.get("director"),
            directorIMDb: doc.get("directorIMDb"),
            year: doc.get("year"),
          };
        })
      );
    });
  }, []);

  return list;
}
