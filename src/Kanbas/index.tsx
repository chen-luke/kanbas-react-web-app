import {Link, Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {

  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2-23-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg"
  })

    const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  }

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId))
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        return c._id === course._id ? course : c;
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
      <KanbasNavigation/>
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />}></Route>
          <Route path="Account" element={<h1>Account</h1>}></Route>
          <Route path="Dashboard" element={<Dashboard
          defaultHeader={false}
          courses={courses}
          course={course}
          setCourse={setCourse}
          addNewCourse={addNewCourse}
          deleteCourse={deleteCourse}
          updateCourse={updateCourse}/>}></Route>
          <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>}></Route>
          <Route path="Courses/" element={<Dashboard 
          defaultHeader={false}
          courses={courses}
          course={course}
          setCourse={setCourse}
          addNewCourse={addNewCourse}
          deleteCourse={deleteCourse}
          updateCourse={updateCourse}
          />}></Route>
        </Routes>
      </div>
    </div>
    </Provider>
);}
export default Kanbas;