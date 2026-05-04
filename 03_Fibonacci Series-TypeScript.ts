/*  03_Fibonacci Series-TypeScript
Classroom Assignment: Fibonacci Series 
 
Learning Objective: 
Understand and apply basic programming constructs in TypeScript to compute the Fibonacci 
sequence using iterative methods. 
 
Expected Completion Time: 
Best Case: 15 min 
Average Case: 20 min 
 
Assignment Details: 
Create a TypeScript program that defines a function to compute the nth Fibonacci number using a 
loop (iterative approach). 
 
Assignment Requirements: 
1. Implement a function named `fibonacci` that accepts an argument `n`, which is a non-negative 
integer, and returns the nth Fibonacci number. 
2. Use a loop to compute the Fibonacci number. Initialize two variables to store the first two 
Fibonacci numbers and update these iteratively up to `n`. 
3. Provide example calls to the `fibonacci` function with different integers to demonstrate the 
function’s functionality. 
 
Expected Outcome: 
Upon completion, you should be able to: - Understand the concept of loops in TypeScript. - Compute Fibonacci numbers efficiently for a range of inputs, demonstrating the iterative approach 
to solving common algorithmic problems.  */
function Fibonacci(num: number): number{
    if(num <= 0){
        return 0;
    } else if(num === 1){
        return 1;
    } else {
        return Fibonacci(num - 1) + Fibonacci(num - 2);
    }
}

for(let i = 0; i < 10; i++){
     console.log(Fibonacci(i));
}


/*  04_Intersection of Arrays
Classroom Assignment: Array Intersection Calculation 
 
Learning Objective: 
Understand and apply basic programming constructs in TypeScript to compute the intersection of 
two arrays. 
 
Expected Completion Time: 
Best Case: 10 min 
Average Case: 15 min 
 
Assignment Details: 
Create a JavaScript program that defines a function to compute the intersection of two arrays. The 
intersection should include elements that appear in both arrays without any duplicates. 
 
Assignment Requirements: 
1. Write a function named `intersection` that accepts two arguments, `arr1` and `arr2`, which are 
arrays of numbers, and returns an array of their intersection. 
2. Ensure no duplicate elements in the resulting array. If an element appears in both `arr1` and 
`arr2`, it should appear only once in the result. 
3. Use a loop to find common elements. Iterate through each element of `arr1` and check if it is 
present in `arr2` and not already included in the result array. 
4. Include example calls to the `intersection` function with different arrays to demonstrate the 
function’s functionality. Include examples with no common elements, all elements common, and 
typical cases. 
 
Expected Outcome: 
Upon completion, you should be able to: - Understand the concept of arrays and loops in JavaScript. - Demonstrate the calculation of intersection for various array inputs, handling both typical and 
edge cases. 
 */

function arrayIntersection(arr1: number[],arr2:number[]): number[]{
    let intersection:number[]=[];
    for(let i=0; i<arr1.length; i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                if(!intersection.includes(arr1[i])){
                    intersection.push(arr1[i]);
                    }
                }
            }
        }
        return intersection;

}

console.log(arrayIntersection([1,2,-3,-4,5],[3,4,7,8]));

/* 02_Factorial_Calculation-TypeScript 
Classroom Assignment: Factorial Calculation 
 
Learning Objective: 
Understand and apply basic programming constructs in TypeScript to compute the factorial of a 
non-negative integer using iterative methods. 
 
Expected Completion Time: 
Best Case: 15 min 
Average Case: 20 min 
 
Assignment Details: 
Create a TypeScript program that defines a function to compute the factorial of a given non
negative integer using a loop (iterative approach). 
 
Assignment Requirements: 
1. Write a function named `factorial` that accepts an argument `n`, which is a non-negative integer, 
and returns its factorial. 
2. Include a check to ensure that the factorial is not computed for negative numbers. If a negative 
number is passed, the function should throw an error. 
3. Use a loop to compute the factorial. Initialize a result variable and multiply it by each integer 
from 2 up to `n`. 
4. Include example calls to the `factorial` function with different integers to demonstrate the 
function’s functionality. Include at least one example where an error is thrown due to a negative 
input. 
 
Expected Outcome: 
Upon completion, you should be able to: - Understand the concept of loops and conditionals in TypeScript. - Demonstrate the calculation of factorial for various inputs, handling both valid and invalid cases.   */
let calculateFactorial = function(num:number): number {
     let fact=1;
     if(num<0){
        return -1;
     }
    else if(num===0 || num===1){
        return fact;
    }
     for(let i=2;i<=num;i++){
        fact*=i;
     }
     return fact;

}

let num1:number=-5;
console.log(`Factorial of ${num1} is ${calculateFactorial(num1)}`);
num1=6;
console.log(`Factorial of ${num1} is ${calculateFactorial(num1)}`);