import "./ProdTab.css";

import TableComp from "../TableComp/TableComp";
import iconFilter from "../../Images/icon-filter.png";

import { useState } from "react";

export default function ProdTab() {
  const [reportTable, setReportTable] = useState(true);
  const [userTable, setUserTable] = useState(false);

  const reportClick = () => {
    setUserTable(false);
    setReportTable(true);
  };
  const userClick = () => {
    setUserTable(true);
    setReportTable(false);
  };

  return (
    <div className="prodTab-container">
      <hr className="prodTab-hr" />
      <span className="prodTab-prod prodTab-span">Productivity</span>
      <span className="prodTab-span prodTab-comp" onClick={userClick}>
        Users
      </span>
      <span className="prodTab-span prodTab-comp" onClick={reportClick}>
        Reports
      </span>
      <hr className="prodTab-hr" />
      <img src={iconFilter} alt="icon-filter" className="prodTab-icon-filter" />
      {reportTable ? <TableComp /> : null}
    </div>
  );
}
