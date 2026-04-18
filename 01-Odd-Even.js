function isOddOrEven(num){
    if(num%2==0){
        return num + " is even";
    } else {
        return num + " is odd";
    }
}

const num=11;
console.log(isOddOrEven(11))