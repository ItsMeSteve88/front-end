// For loop

// It is used to repeat a block of code a specific number of times.

// 1. Initialization
// 2. Condition
// 3. Increment


// for(initialization; condition; increment){
// code to be repeated
// }
    
// for example, print the numbers from 1 to 10

// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }

// print even numbers from 1 to 100

// for(var i = 1; i <= 100; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// print multiplication table of 5
// let x =15;

// for(var i = 1; i <= 10; i++){
//     console.log(i * x);
// }

// while loop

// It is used to repeat a block of code until a condition is met.

// use loops to print prime numbers from 1 to 100

for(var i = 1; i <= 100; i++){
    var flag = 0;
    for(var j = 2; j < i; j++){
        if(i % j == 0){
            flag = 1;
            break;
        }
    }
    if(flag == 0){
        console.log(i);
    }
}



