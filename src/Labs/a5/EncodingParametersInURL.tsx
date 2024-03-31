import React, { useEffect, useState } from "react";
import axios from "axios";
function EncodingParametersInURL() {
    const [a, setA] = useState(34);
    const [b, setB] = useState(23);
    const [welcome, setWelcome] = useState("");
    const fetchWelcome = async () => {
        const response = await axios.get("http://localhost:4000/a5/welcome");
        setWelcome(response.data);
    }
    const [result, setResult] = useState(0);



    const fetchSum = async (a: number, b: number) => {
        const response = await
            axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
        setResult(response.data);
    };
    const fetchSubtraction = async (a: number, b: number) => {
        const response = await axios.get(
            `http://localhost:4000/a5/substract/${a}/${b}`);
        setResult(response.data);
    };


    useEffect(() => {
        fetchWelcome();
    }, [])

    return (
        <div>
            <h3>Encoding Parameters In URLs</h3>
            <h4>Intergrating React with APIs</h4>
            <h5>Fetching Welcomes</h5>
            <h6>{welcome}</h6>
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
            <h4>Calculator</h4>
            <input type="number" value={a} onChange = {(e) => setA(parseInt(e.target.value))} />
            <br />
            <input type="number" value={b} onChange = {(e) => setB(parseInt(e.target.value))} />
            <br />
            <input value={result} type="number" readOnly />
            <br />
            <h3>Fetch Result</h3>
            <button className='btn btn-primary me-2' onClick={() => fetchSum(a, b)} >
                Fetch Sum of {a} + {b}
            </button>
            <br />
            <button className='btn btn-danger mt-2' onClick={() => fetchSubtraction(a, b)} >
                Fetch Substraction of {a} - {b}
            </button>

        </div>
    )
}

export default EncodingParametersInURL;