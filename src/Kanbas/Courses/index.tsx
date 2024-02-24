import { courses } from "../../Kanbas/Database";
import { useParams, Routes, Route, Navigate} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { CgCloseR } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import Modules from './Modules';
import Home from "./Home";
import Assignments from "./Assignments";
import "./index.css";
import {useState } from "react";
import KanbasNavigation from "../Navigation";
import KanbasMobileNav from "./KanbasMobileNav";


function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const [kanbasMenuVisible, setKanbasMenuVisible] = useState(false);
  const [courseMenuVisible, setCourseMenuVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  const toggleKanbas = (kanbasMenuVisible: boolean) => {
    setKanbasMenuVisible(kanbasMenuVisible)
    setContentVisible(!contentVisible)
  }

  const toggleCourse = (courseMenuVisible: boolean) => {
    setCourseMenuVisible(courseMenuVisible)
    setContentVisible(!contentVisible)
  }

  const getDisplayClass = (isVisible: boolean) => {
    return isVisible ? "d-block" : "d-none"
  }

  return (
    <div>
      <div className={"d-flex justify-content-between align-items-center ms-4 mt-2 " + getDisplayClass(contentVisible)}>
        <button className="btn btn-light" onClick={() => { toggleKanbas(!kanbasMenuVisible) }}><HiMiniBars3 className="d-block" /></button>
        <h4 className="ms-4 mt-2 me-2 me-auto" style={{ color: "#e83939" }}>Course {course?.name} <br /><span style={{ fontSize: "15px" }}>{course?.number}</span></h4>
        <button className="btn me-4" onClick={() => {toggleCourse(!courseMenuVisible)}}><FaChevronDown className="d-sm-block d-md-none" /></button>
      </div>
      <hr className={getDisplayClass(contentVisible)} />
      <div className={ getDisplayClass(courseMenuVisible) + " d-flex align-items-top px-3 mt-4"}>
      <CourseNavigation hide="" />
        <button className="btn btn-sm h-25 ms-auto" onClick={() => { toggleCourse(!courseMenuVisible) }}>
          <span><CgCloseR style={{ fontSize: '1.5rem' }} /></span>
        </button>
      </div>
      <div className={getDisplayClass(kanbasMenuVisible) + " d-flex align-items-top px-3 mt-4"}>
          <KanbasMobileNav/>

          <button className="btn btn-sm h-25 ms-auto" onClick={() => { toggleKanbas(!kanbasMenuVisible) }}>
          <span><CgCloseR style={{ fontSize: '1.5rem' }} /></span>
        </button>
      </div>
      <div className={getDisplayClass(contentVisible)}>
        <CourseNavigation hide="d-none"/>
        <div>
          <div
            className={"overflow-y-scroll bottom-0 end-0 mt-4 wd-main-content"}
          > {/*removed left:320px into own media query, see CSS file*/}
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;