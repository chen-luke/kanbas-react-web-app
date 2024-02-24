import {Link, Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation/>
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />}></Route>
          <Route path="Account" element={<h1>Account</h1>}></Route>
          <Route path="Dashboard" element={<Dashboard />}></Route>
          <Route path="Courses/:courseId/*" element={<Courses />}></Route>
          <Route path="Courses/" element={<Dashboard defaultHeader={false}/>}></Route>
        </Routes>
      </div>
    </div>
);}
export default Kanbas;