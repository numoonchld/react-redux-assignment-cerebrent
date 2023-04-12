import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TableRow = ({ tableRowDetail }) => {
  const { fName, lName, email } = tableRowDetail;

  return (
    <>
      <tr>
        <td>{fName}</td>
        <td>{lName}</td>
        <td>{email}</td>
      </tr>
    </>
  );
};

export default function Table() {
  const table = useSelector((state) => state.table);

  const [tableData, setTableData] = useState(table);
  const [sortOrder, setSortOrder] = useState(false);

  const handleSort = (sortKey) => {
    const sortingTableData = [...tableData];
    sortingTableData.sort((a, b) =>
      a[sortKey] < b[sortKey] ? (sortOrder ? -1 : 1) : sortOrder ? 1 : -1
    );
    setTableData(sortingTableData);
    setSortOrder(!sortOrder);
  };

  useEffect(() => {
    setTableData(table);
  }, [table]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("fName")}>First name</th>
            <th onClick={() => handleSort("lName")}>Last name</th>
            <th onClick={() => handleSort("email")}>Email name</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <TableRow key={row.id} tableRowDetail={row} />
          ))}
        </tbody>
      </table>
    </>
  );
}
