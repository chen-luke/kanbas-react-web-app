import { Module } from "module";
import React, { useState } from "react";
function WorkingWithObjects() {

    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    })
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"

    const [module, setModule] = useState({
        id: 100, name: "Module Name",
        description: "Full Stack Web Development",
        course: "React.js"
    })

    const MODULE_URL = "http://localhost:4000/a5/module"
    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a className="btn btn-primary" href="http://localhost:4000/a5/assignment">
                Get Assignment
            </a>
            <br />
            <br />
            <h4>Retrieving Properties</h4>
            <a className="btn btn-primary" href="http://localhost:4000/a5/assignment/title">
                Get Title
            </a>
            <br />
            <br />
            <h4>Modifying Properties</h4>
            <input className="form-control w-25" type="text" onChange={(e) => setAssignment({
                ...assignment, title: e.target.value
            })} value={assignment.title} />
            <br />
            <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <br />
            <br />
            <h4>Retrieving Module</h4>
            <a className="btn btn-primary" href="http://localhost:4000/a5/module">
                Get Module
            </a>
            <br />
            <br />
            <a className="btn btn-primary" href="http://localhost:4000/a5/module/name">
                Get Module Name
            </a>
            <br />
            <br />
            <input className="form-control w-25" type="text" onChange={(e) => setModule({
                ...module, name: e.target.value
            })} value={module.name} />
            <a className="btn btn-primary mt-2" href={`${MODULE_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <br />
            <br />
            <input className="form-control w-25" type="number" onChange={(e) => setAssignment({
                ...assignment, score: parseInt(e.target.value)
            })} value={assignment.score} />
            <a className="btn btn-primary mt-2" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
                Update Assingment Score
            </a>
            <br />
            <br />
            <label htmlFor="">
                Module Completed?
                <input className="ms-2" type="checkbox" onChange={(e) => setAssignment({
                    ...assignment, completed: e.target.checked
                })} value={assignment.completed.toString()} />
                {assignment.completed.toString()}
            </label>
            <br />
            <a className="btn btn-primary mt-2" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
                Update Assingment Completion
            </a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}
export default WorkingWithObjects;