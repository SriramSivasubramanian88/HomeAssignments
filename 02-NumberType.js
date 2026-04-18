function returnNumberType(num) {
    if(num>0){
        return num+" is a positive number"
    }
    else if(num < 0){
        return num+" is a negative number"
    }
    else{
        return num+" is a zero"
    }
}

const num=0-5;
console.log(returnNumberType(num))