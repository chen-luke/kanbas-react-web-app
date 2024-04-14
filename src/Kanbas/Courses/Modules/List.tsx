import React, { useState, useEffect } from "react";
import "./index.css";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaWindowClose, FaEdit } from "react-icons/fa";
import { useParams } from "react-router";
import ModulesEditor from "./ModulesEditor";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import { KanbasState } from "../../store";
import * as client from "./client";



function ModuleList() {

  type CourseId = {
    courseId: string;
  }

  const { courseId } = useParams<{ courseId: string }>();
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();

  // const [moduleList, setModuleList] = useState<any[]>(db.modules);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  //   _id: 0
  // });
  // const addModule = (module: any) => {
  //   const newModule = {
  //     ...module,
  //     _id: new Date().getTime().toString()
  //   };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };

  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId);
  //   setModuleList(newModuleList);
  // };

  // const updateModule = () => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };




  //const modulesList = db.modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  const handleAddModule = () => {
    if (courseId) {
      client.createModule(courseId, module).then((module) => {
        dispatch(addModule(module));
      });
    }
  };

  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    if (courseId) {
      client.findModulesForCourse(courseId)
        .then((modules) =>
          dispatch(setModules(modules))
        );
    }

  }, [courseId]);


  return (
    <div className="row h-25 w-75 px-5 col col-lg-8">
      {/* <!-- Add buttons here --> */}
      <ModulesEditor />
      <hr />
      <ul className=" list-group">
        <li className="list-group-item">
          <h5>Edit Module</h5>
          <div className="d-flex justify-center mt-3">
            <input value={module.name}
              onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
            />
            <button className="btn btn-primary btn-sm ms-2" onClick={handleUpdateModule}>Update</button>
            <button className="btn btn-success btn-sm ms-2" onClick={handleAddModule}>Add</button>
          </div>
          <div className="w-100 mt-4">
            <textarea className="w-100" value={module.description}
              onChange={(e) => dispatch(setModule({
                ...module, description: e.target.value
              }))}
            />
          </div>
        </li>

        {moduleList.filter((module) => module.course === courseId).map((module, index) => (
          <li key={index}
            className="list-group-item mt-4" style={{ borderTopWidth: "1px" }}
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <button className="btn mb-1" onClick={() => dispatch(setModule(module))}>
                  <FaEdit className="ms-2" />
                </button>
                <button className="btn"
                  onClick={() => handleDeleteModule(module._id)}
                >
                  <FaWindowClose className="text-danger mb-1" /></button>
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule.id === module.id && (
              <ul className="list-group mt-4">
                {module.lessons?.map((lesson: any, index: number) => (
                  <li key={index} className="list-group-item">
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