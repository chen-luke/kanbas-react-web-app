function Destructing() {
    const person = {name: "John", age: 25, salary:1000000}
    const {name, age, salary} = person;
    // const name = person.name
    // const age = person.age
    const numbers = ["one", "two", "three", 4];
    const [first, second, third, four] = numbers;
    return(
        <div>
            <h2>Destructing</h2>
            <h3>Object Destructing</h3>
            const &#123; name, age &#125; = &#123; name: "John" age:25 salary:1000000 &#125; <br /> <br />
            name = {name} <br />
            age = {age} <br />
            salary = {salary} <br />
            <h3>Array Destructing</h3>
            const [first, second, third] = ["one", "two", "three"] <br /> <br />
            first = {first} <br />
            second = {second} <br />
            third = {third} <br />
            four = {four} <br />
        </div>
    )
}

export default Destructing;