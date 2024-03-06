import React from "react";
import PassingFunctions from "./PassingFunctions";
import PassingDataOnEvent from "./PassingDataOnEvent";
import ClickEvent from "./ClickEvent";

const Assignment4 = () => {
    const sayHello = () => {
        alert("Hello");
    }
    return (
        <>
        <h1>Assignment 4</h1>
        <ClickEvent />
        <PassingDataOnEvent />
        <PassingFunctions theFunction={sayHello} />
      </>
  
    )
}

export default Assignment4;