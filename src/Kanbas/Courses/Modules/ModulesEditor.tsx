import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";

function ModulesEditor() {

    return (
        <div className="d-flex mb-4 justify-content-end flex-wrap">
            <button type="button" className="btn btn-sm btn-primary btn-light me-3 mt-3" style={{ whiteSpace: "nowrap" }}>Collapse
                All</button>
            <button type="button" className="btn btn-sm btn-primary btn-light ms-1 mt-3" style={{ whiteSpace: "nowrap" }}>View
                Progress</button>

            <div className="d-flex align-items-center mt-3 ms-auto">
                <i className="fa fa-check-circle text-success ms-4 me-1"></i>
                <FaCheckCircle className="ms-3 me-1 text-success w-50" />
                <select id="select-one-genre" className="form-select form-select-sm" defaultValue={"Publish-All"}>
                    <option value="Publish-Some"> Publish Some</option>
                    <option value="Publish-All"> Publish All</option>
                </select>
            </div>
            <div className="ms-3 mt-3 mt-sm-3">
                <button type="button" className="btn btn-sm btn-primary btn-danger " style={{ whiteSpace: "nowrap" }}>+ Module</button>
                <button className="btn btn-sm btn-primary btn-light"><FaEllipsisV /></button>
            </div>
        </div>
    )
}

export default ModulesEditor;