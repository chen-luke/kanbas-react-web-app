import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
function CourseNavigation({hide = "d-none"}) {
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
  const { pathname } = useLocation();
  
  return (
    <ul className={`wd-navigation ${hide} d-md-block`}>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
export default CourseNavigation;
