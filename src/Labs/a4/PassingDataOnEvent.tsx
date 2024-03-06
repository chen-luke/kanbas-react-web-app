const add = (a: number, b: number) => {
    alert(`${a} + ${b} = ${a + b}`);
  };
  function PassingDataOnEvent() {
    return (
      <div>
        <h2>Passing Data on Event</h2>
        <button onClick={() => add(2, 3)}
                // onClick={add(2, 3)} // use the above syntax or it will create an infinite loop!!!
                // The arrow function is passing a reference to the function
                // without arrow function you are immediately calling the function to get an result.
                // this creates a rerendering of the web page, which then calls the function again, thus creating an infinite loop.
                className="btn btn-primary">
          Pass 2 and 3 to add()
        </button>
      </div>
    );
  }
  export default PassingDataOnEvent;