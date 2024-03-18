import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard({ defaultHeader = true, courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
    defaultHeader: boolean;
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }) {
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   _id: "0", name: "New Course", number: "New Number",
  //   startDate: "2-23-09-10", endDate: "2023-12-15",
  //   image: "/images/reactjs.jpg"
  // })
  // const course = {
  //   _id: "0", name: "New Course", number: "New Number",
  //   startDate: "2-23-09-10", endDate: "2023-12-15",
  //   image: "/images/reactjs.jpg"
  // };

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



  return (
    <div className="p-4">
      <h1>{`${defaultHeader ? "Dashboard" : "Pick A Course"}`}</h1><hr />

      <h5>Course</h5>
      <div className="row g-2 col-md-9 col-lg-5 col-xl-4 col-xxl-3">
        <input value={course.name} className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <input value={course.number} className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })} />
        <input value={course.startDate} className="form-control" type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
        <input value={course.endDate} className="form-control" type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
      </div>
      <button className="btn btn-primary mt-3" onClick={addNewCourse}>Add</button>
      <button className="btn btn-primary mt-3 ms-2" onClick={updateCourse}>Update</button>



      <h2 className="mt-5">Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4 mt-0">
          {courses.map((course: any) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top" alt="" style={{ height: 150 }} />
                <div className="card-body">
                  <Link className="card-little" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name}

                  </Link>
                  <p className="card-next">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">GO </Link>
                  <button className="btn btn-light ms-2" onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}>Edit</button>
                  <button className="btn btn-danger ms-2" onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;