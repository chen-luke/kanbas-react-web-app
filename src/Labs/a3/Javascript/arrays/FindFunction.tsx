function FindFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2', 'string3'];

    const fourIndex = numberArray1.find(a => a===4);
    const string3Index = stringArray1.find(a => a === 'string3');

    return(
        <>
            <h2>Find Function</h2>
            fourIndex = {fourIndex} <br />
            string3Index = {string3Index} <br />
        </>
    )
}

export default FindFunction