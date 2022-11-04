// functions

// almost everything in JS is a function.

// Closure => function with preserved data from parent, only taking what is needed.

function add() {
    var a = 10;
    var b = 20;
    console.log(a + b); // 30

    // Child function using params of parent function
    return function addNext(c)
    {
        console.log(a + b + c); // 60
    }
}

// calling add function
const childFunction = add(); // call to parent function
// end of function, a and b are destroyed

// because of closure, a and b are preserved, which are then called with c
childFunction(30); // call to child function
