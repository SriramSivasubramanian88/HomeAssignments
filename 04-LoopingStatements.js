/* 
Classroom Assignment: Looping Statements 
Learning Objective:  
Learn the fundamentals of looping statements in JavaScript 
 
Expected Completion Time:  
Best Case: 15 minutes  
Average Case: 20 minutes  
 
Assignment Details:  
Write a JavaScript function named `printOddNumbers` that prints odd numbers between 1 and 25 
 
Assignment Requirements:  
 1. Create a function - print odd numbers (from 1 to 25) and execute in debug mode 
 2. Call that function from the javascript 
 
Hints to Solve:  
Use the modulo operator for odd number detection and a for loop to iterate values from 1 to 25 
 
Expected Outcome:  
Upon completion, you should be able to:  - Understand and implement looping statements using Javascript 
 */

let printOddNumbers = () => {
    for(let i=1;i<=25;i++){
        if(i%2!==0){
            console.log(i);
            
        }
}
}
printOddNumbers()