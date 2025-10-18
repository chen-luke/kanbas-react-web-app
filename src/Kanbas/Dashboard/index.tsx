import { Link } from "react-router-dom";

function Dashboard({ defaultHeader = true, courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
    defaultHeader: boolean;
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: (e: React.FormEvent) => Promise<void>;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }) {

  return (
    <div className="p-4">
      <h1>{`${defaultHeader ? "Dashboard" : "Pick A Course"}`}</h1><hr />
      <h5>Course</h5>
      <form onSubmit={addNewCourse}>
        <div className="row g-2 col-md-9 col-lg-5 col-xl-4 col-xxl-3">
          <input value={course.name} className="form-control" required placeholder="Course Name"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <input value={course.number} className="form-control" type="number" max="9999" required placeholder="Course Number"
            onChange={(e) => setCourse({ ...course, number: e.target.value })} />
          <input value={course.startDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
          <input value={course.endDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add</button>
        <button type="button" className="btn btn-primary mt-3 ms-2" onClick={updateCourse}>Update</button>
      </form>
      <h2 className="mt-5">Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4 mt-0">
          {courses.map((course: any) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <CourseImage courseId={course.number} />
                <div className="card-body">
                  <Link className="card-little" to={`/Kanbas/Courses/${course.id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name}
                  </Link>
                  <p className="card-next">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course.id ?? course._id}/Home`} className="btn btn-primary">GO </Link>
                  <button className="btn btn-light ms-2 border border-1" onClick={(event) => {
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