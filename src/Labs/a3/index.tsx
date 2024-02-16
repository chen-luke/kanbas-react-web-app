import Javascript from "./Javascript";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import TodoList from "./todos";


function Assignment3() {
    return (
        <div className="container">
            <h1>Assignment 3</h1>
            <TodoList />
            {/* <Highlight children={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam"}></Highlight> */}
            <Highlight>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam</Highlight>
            <ConditionalOutput />
            <Styles />
            <Classes />
            <PathParameters />
            <Javascript />
        </div>
    )
}

export default Assignment3;