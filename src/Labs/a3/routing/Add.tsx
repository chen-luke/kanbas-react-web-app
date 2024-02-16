import React from "react";
import { useParams } from "react-router";

function Add() {
    const {a, b, c} = useParams();
    return (
        <div>
            <h2>Add Path Parameters</h2>
            {a} + {b} + {c} = {parseInt(a as string) + parseInt(b as string) + parseInt(c as string)}
        </div>
    )
}

export default Add;