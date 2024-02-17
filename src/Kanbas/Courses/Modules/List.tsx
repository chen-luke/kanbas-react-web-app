import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div className="row h-25 w-75 px-5">
      {/* <!-- Add buttons here --> */}
      <div className="d-flex mb-4">
        <button type="button" className="btn btn-sm btn-primary btn-light" style={{ whiteSpace: "nowrap" }}>Collapse
          All</button>
        <button type="button" className="btn btn-sm btn-primary btn-light ms-1" style={{ whiteSpace: "nowrap" }}>View
          Progress</button>

        <div className="d-flex align-items-center">
          <i className="fa fa-check-circle text-success ms-4 me-1"></i>
          <FaCheckCircle className="ms-3 me-1 text-success w-50" />
          <select id="select-one-genre" className="form-select form-select-sm me-3">
            <option selected={true}> Publish All</option>
          </select>
        </div>
        <div className="d-flex flex-nowrap">
          <button type="button" className="btn btn-sm btn-primary btn-danger " style={{ whiteSpace: "nowrap" }}>+ Module</button>
          <button className="btn btn-sm btn-primary btn-light"><FaEllipsisV /></button>
        </div>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item mt-4"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;