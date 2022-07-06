import { Link } from "react-router-dom";

import arrow from "../../Images/icon-arrow.png";

import "./PageNav.css";

export default function PageNav() {
  return (
    <div className="PageNav-container">
      <Link className="PageNav-link" to="/">
        Home
      </Link>
      <img src={arrow} alt="arrow" />
      <Link className="PageNav-link" to="/Clinical">
        Clinical
      </Link>
      <img src={arrow} alt="arrow" />
      <Link className="PageNav-link" to="/Productivity">
        Productivity
      </Link>
    </div>
  );
}
