import { useState, useEffect, useMemo } from "react";
import "./TableComp.css";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

function TableComp() {
  const [rowData, setRowData] = useState();

  const [columnDefs, setColumnDefs] = useState();

  async function fetchData() {
    await fetch("http://localhost:5000/userData")
      .then((res) => res.json())
      .then((rowData) => {
        const newRowData = rowData.data.map((dataObj) => {
          const sum = Object.values(dataObj)
            .splice(1)
            .reduce((partialSum, a) => partialSum + a, 0);
          console.log(sum);
          dataObj.total_hours = sum;
          return dataObj;
        });
        setRowData(newRowData);

        //Set CoulmnDefs
        const columnFields = Object.keys(newRowData[0]);

        const columnD = columnFields.map((ele) => {
          return { field: ele };
        });

        setColumnDefs(columnD);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  return (
    <div
      className="ag-theme-alpine tableComp-container"
      style={{
        height: 389,
        width: 1300,
        fontFamily: "Outfit",
        fontSize: "smaller",
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}

export default TableComp;
