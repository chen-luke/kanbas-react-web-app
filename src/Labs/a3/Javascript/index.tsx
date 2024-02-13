import VariableAndConstants from "./variables/VariablesAndConstants"
import VariableTypes from "./variables/VariableTypes";
import BooleanVariable from "./variables/BooleanVariable";
import IfElse from "./conditionals/IfElse";
import TenaryOperator from "./conditionals/TernaryOperator";
import WorkingWithFunction from "./functions/WorkingWithFunctions";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";

function Javascript() {
    console.log("Hello World!");
    return (
        <div>
            <h1>JavaScript</h1>
            <VariableAndConstants />
            <VariableTypes />
            <BooleanVariable />
            <IfElse />
            <TenaryOperator />
            <WorkingWithFunction />
            <WorkingWithArrays />
            <TemplateLiterals />
            <House />
        </div>
    );
}

export default Javascript;