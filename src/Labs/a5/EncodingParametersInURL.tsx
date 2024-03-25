import React, { useState } from "react";
function EncodingParametersInURL() {
    const [a, setA] = useState(34);
    const [b, setB] = useState(23);

    return (
        <div>
            <h3>Encoding Parameters In URLs</h3>
            <h4>Calculator</h4>
            <input className="form-control w-25" type="number" value={a} onChange={(e) => setA(parseInt(e.target.value))} /> <br />
            <input className="form-control w-25" type="number" value={b} onChange={(e) => setB(parseInt(e.target.value))} />
            <h3>Path Parameters</h3>
            <a className="btn btn-primary" href={`http://localhost:4000/a5/add/${a}/${b}`}>Add {a} + {b}</a>
            <a className="ms-2 btn btn-danger" href={`http://localhost:4000/a5/substract/${a}/${b}`}>Substract {a} - {b}</a>
            <a className="ms-2 btn btn-primary"
                href={`http://localhost:4000/a5/multiply/${a}/${b}`}>
                Multiply {a} * {b}
            </a>
            <a className="ms-2 btn btn-danger"
                href={`http://localhost:4000/a5/divide/${a}/${b}`}>
                Divide {a} / {b}
            </a>
            <h3>Query Parameters</h3>
            <a className="btn btn-primary"
                href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
                Add {a} + {b}
            </a>
            <a className="ms-2 btn btn-danger"
                href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
                Substract {a} - {b}
            </a>
            <a className="ms-2 btn btn-primary"
                href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
                Multiply {a} * {b}
            </a>
            <a className="ms-2 btn btn-danger"
                href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}>
                Divide {a} / {b}
            </a>
            <br />
            <br />


        </div>
    )
}

export default EncodingParametersInURL;