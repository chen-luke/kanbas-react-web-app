import Add from "./Add";
import { Link, Routes, Route } from "react-router-dom";
function PathParameters() {
    return(
        <div>
            <h2>Path Paremeters</h2>
            <Link to="/Labs/a3/add/1/1/1">1 + 1 + 1</Link> <br />
            {/* This will break if you don't pass all the params. Eg. add/1/2  
                becase in <Add /> it is looking for :a/:b/:c
            */}
            <Link to="/Labs/a3/add/1/2/3">1 + 2 + 3</Link> <br />
            <Routes>
                <Route path='add/:a/:b/:c' element={<Add />}/>
            </Routes>
        </div>
    )
}

export default PathParameters;