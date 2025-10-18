import {Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Account from "./Account";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import axios from "axios";
import store from "./store";
import { Provider } from "react-redux";

const API_BASE = process.env.REACT_APP_API_BASE;
function Kanbas() {

  //const [courses, setCourses] = useState<any[]>(db.courses);
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2-23-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg"
  })

  // const addNewCourse = () => {
  //   const newCourse = { ...course, _id: new Date().getTime().toString() };
  //   setCourses([...courses, { ...course, ...newCourse }]);
  // }

  // const deleteCourse = (courseId: string) => {
  //   setCourses(courses.filter((course) => course._id !== courseId))
  // };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       return c._id === course._id ? course : c;
  //     })
  //   );
  // };

  //const COURSES_API = "https://kanbas-node-server-app-cs4550-02.onrender.com/api/courses";
  //const COURSES_API = "http://localhost:4000/api/courses";
  
  const COURSES_API = `${API_BASE}/api/courses`;

  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };

  const addNewCourse = async () => {
    const response = await axios.post(COURSES_API, course);
    setCourses([...courses, response.data]);
  };

  const deleteCourse = async (courseId: string) => {
    await axios.delete(
      `${COURSES_API}/${courseId}`
    );
    setCourses(courses.filter(
      (c) => c._id !== courseId));
  };


  const updateCourse = async () => {
    await axios.put(
      `${COURSES_API}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
  };


  useEffect(() => {
    findAllCourses();
  });


  return (
    <Provider store={store}>
      <div className="d-flex" style={{minHeight:"100vh"}}>
        <KanbasNavigation />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/Account/*" element={<Account />}></Route>
            <Route path="/" element={<Navigate to="Dashboard" />}></Route>
            <Route path="Dashboard" element={<Dashboard
              defaultHeader={false}
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse} />}></Route>
            <Route path="Courses/:courseId/*" element={<Courses/>}></Route>
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
  );
}
export default Kanbas;