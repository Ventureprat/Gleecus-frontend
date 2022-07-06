import iconAdmin from "../../Images/icon-admin.png";
import iconBusiness from "../../Images/icon-businessDev.png";
import iconClinical from "../../Images/icon-clinical.png";
import iconHealthCare from "../../Images/icon-healthCare.png";
import iconLogo from "../../Images/icon-logo.png";
import iconNotifi from "../../Images/icon-notification.png";
import iconProfile from "../../Images/icon-profile.png";

import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="NavBar-container">
      <img src={iconLogo} alt="icon-logo" className="icons" />
      <img src={iconClinical} alt="icon-clinical" className="icons" />
      <img src={iconBusiness} alt="icon-BusinessDev" className="icons" />
      <img src={iconAdmin} alt="icon-admin" className="icons" />
      <img
        src={iconHealthCare}
        alt="icon-healthCare"
        className="icons iconRt"
      />
      <img src={iconNotifi} alt="icon-notification" className="icons iconRt" />
      <img src={iconProfile} alt="icon-profile" className="icons iconRt" />
    </nav>
  );
}
