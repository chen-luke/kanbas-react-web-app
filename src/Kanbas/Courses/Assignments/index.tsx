import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaSearch } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = db.assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      <div className="row pe-5 ms-0 gap-2 justify-content-between mt-4">
        <div className="col col-sm-12 col-lg-4 col-xl-4 col-xxl-2 ">
          <div className="input-group ">
            <span className="input-group-text"><FaSearch/></span>
            <input type="search" className="form-control" placeholder="Search for Assignments" />
          </div>
        </div>

        <div className="col col-12  col-lg-7 col-xl-7 col-xxl-3 d-flex gap-2">
          <button type="button" className="btn btn-light btn-sm text-nowrap">+ Group</button><button type="button"
            className="btn  btn-sm btn-danger text-nowrap">+ Assignment</button>
          <select name="" className="form-select" id="assigmentDropdown">
            <option value="EDIT_DATES" selected>Edit Assignment Dates</option>
            <option value="TEST">Test 1</option>
          </select>
        </div>
      </div>
      {/* {<!-- Add buttons and other fields here -->} */}
      <ul className="list-group wd-modules pe-5 mt-4">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Assignments;