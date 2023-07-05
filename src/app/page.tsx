"use client";
import Image from "next/image";
import styles from "./page.module.css";
import getTable from "../../utils/getTable";
import { useEffect, useState } from "react";
import css from "./table.module.css";

interface TableRow {
  name: string;
  phone: string;
  phone_mask: string;
}

interface Table {
  cities: TableRow;
}

export default function Home() {
  const getData = () => getTable();
  const [table, setTable] = useState<any>();
  const [tableError, setTableError] = useState();
  useEffect(() => {
    getData()
      .then((response: any) => {
        setTable(response);
      })
      .catch((err) => setTableError(err));
  }, []);
  console.log("table", tableError);

  return (
    <main className={styles.main}>
      <div>
        {table !== undefined && (
          <table className={css.table}>
            <tbody>
              {Object.values<TableRow>(table).map((a: TableRow, i: number) => {
                return (
                  <tr key={`${i}_${a.name}`} className={css.tableRow}>
                    <td className={css.tableCell}>{a.name}</td>
                    <td className={css.tableCell}>{a.phone}</td>
                    <td className={css.tableCell}>{a.phone_mask}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
