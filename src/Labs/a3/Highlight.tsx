import { ReactNode } from "react";
function Highlight({ children }: { children: ReactNode }) {
  return (
    <span style={{ backgroundColor: "yellow", color: "red" }}>
      {children}
    </span>
  );
}

// differences between function destructing, and standard function parameter.
// function add1(a: number, b: number) {
//     return (a + b);
// }

// function add2({a, b} : {a:number, b:number}) {
//     return (a + b)
// }

// function test() {

//     const number = {a:2, b:3}

//     const result1 = add1(number.a, number.b)
//     const result2 = add2(number)
// }


export default Highlight;