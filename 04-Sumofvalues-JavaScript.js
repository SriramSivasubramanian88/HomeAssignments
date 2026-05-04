/* 04-Sum of n values-JavaScript
Classroom Assignment: Sum of n values 
 
Learning Objective:  
Learn to implement a function in JavaScript that calculates and prints the cumulative sum of numbers from 1 
to a given `n`. 
 
Expected Completion Time:  
Best Case: 10 minutes  
Average Case: 15 minutes  
 
Assignment Details:  
Write a function to sum all the values between 1 and n, and return the sum 
Take n = 5, print between 1 and 5, and keep adding the sum of values  
i.e., 1+2=3, 3+3 =6, 6+4=10, 10+5 =15 
 
Assignment Requirements:  
1. Define a function with parameter `n`. 
2. Initialize `sum` to 0. 
3. Iterate from 1 to `n`. 
4. Add `i` to `sum` in each iteration. 
5. Print `i` and the current `sum`. 
6. Return `sum` after the loop. 
7. Call the function with a specific value. 
 
Hints to Solve:  
Remember to initialize a sum variable before the loop and use a `for` loop to iterate, adding each number to 
the sum while printing the intermediate sums. 
 
Expected Outcome:  
Upon completion, you should be able to:  - Understand and apply looping and accumulation techniques to calculate cumulative sums in JavaScript. 
 */
function sum(n){
    let varSum=0;
    for(let i=0;i<=n;i++){
        varSum+=i;
    }
    return varSum
}

let n=6;
console.log(`Sum till ${n} is ${sum(n)}`);

/*02-Find occurrences-Array
Classroom Assignment: Arrays in JS 
 
Learning Objective:  
Learn how to count the occurrences of a specific element in an array using JavaScript. 
 
Expected Completion Time:  
Best Case: 10 minutes  
Average Case: 15 minutes  
 
Assignment Details:  
Find the number of occurrences. 
Given the array, const nums = [2,4,5,2,1,2]; 
if const k = 2, then output >> 3 
 
Assignment Requirements:  
1. Initialize count to 0. 
2. Loop through the array `nums`. 
3. If the element equals `k`, increment count. 
4. Return the count of `k` in `nums`. 
 
Hints to Solve:  
Loop through the array and compare the k with the array index value and if matches, increase the count 
 
Expected Outcome:  
Upon completion, you should be able to:  - Understand how to operate the arrays in JavaScript  */
function arrayOccurences(arr,num){
    let cnt=0;
    for(let a of arr){
        if(a===num){
            cnt++;
        }
    }
    return cnt;
}

console.log(`Occurrences of 4 in [1,2,3,2] is ${arrayOccurences([1,2,3,2],4)}`);

/* 
Classroom Assignment: Two Sum 
 
Learning Objective:  
Learn to identify and return pairs of indices whose elements sum up to a specific target using nested loops in 
JavaScript. 
 
Expected Completion Time:  
Best Case: 15 minutes  
Average Case: 20 minutes  
 
Assignment Details:  
Given the array, const nums = [2, 4, 7, 8, 11, 14];  
const target = 18; 
return the indices that have matching targets >> 7+11 (2, 4), 4+14 (1, 5) 
 
Assignment Requirements:  
1. Initialize an empty array `results`. 
2. Use a nested loop to iterate over `nums` array elements. 
3. Check if the sum of two distinct elements equals `target`. 
4. If true, add their indices to `results`. 
5. Return `results` containing pairs of indices. 
 
Hints to Solve:  
Iterate with two loops: one for each element, and another for elements ahead. Inside the second loop, check 
if two elements sum to the target. 
 
Expected Outcome:  
Upon completion, you should be able to:  - Understand the nested loops and the arrays in JavaScript  */
function twoSum(arr,target){
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===target){
            console.log(i," ",j);
        }
    }
}
}

twoSum([4,2,1,3],6)

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
let factorial=function(num){
     let fact=1;
     if(num<0){
        return "Factorial is not defined for negative numbers";
     }
    else if(num===0 || num===1){
        return fact;
    }
     for(let i=2;i<=num;i++){
        fact*=i;
     }
     return fact;

}

let num=-5;
console.log(`Factorial of ${num} is ${factorial(num)}`);
num=6;
console.log(`Factorial of ${num} is ${factorial(num)}`);