import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaClock, FaUserFriends, FaInbox, FaUsers, FaHandsHelping, FaRegArrowAltCircleRight} from "react-icons/fa";
import logo from '../imgs/logo.png';
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2"/>  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" color="red"/>  },
    { label: "Courses",   icon: <FaBook className="fs-2" color="red"/>           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" color="red"/> },
    { label: "Inbox",  icon: <FaInbox className="fs-2" color="red"/> },
    { label: "History",  icon: <FaClock className="fs-2" color="red"/> },
    { label: "Studio",  icon: <FaUsers className="fs-2" color="red"/> },
    { label: "Commons",  icon: <FaRegArrowAltCircleRight className="fs-2" color="red"/> },
    { label: "Help",  icon: <FaHandsHelping className="fs-2" color="red"/> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
        <li>
            <Link to={`https://www.northeastern.edu`}>
                <img src={logo} style={{width:"100%", height:"100%"}}  alt="northeastern university logo"/>
            </Link>
        </li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;