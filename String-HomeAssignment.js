function lengthOfLastWord(s){
    const sArr=s.split(" ")
    console.log(sArr[sArr.length-1].length);
}

   lengthOfLastWord("fly me to the  moon")


function isAnagram(str1,str2){
    const str1Sorted = str1.split("").sort().join("").trim();
    const str2Sorted = str2.split("").sort().join("").trim();
    console.log(str1Sorted,",",str2Sorted);
    
    if(str1Sorted===str2Sorted){
        console.log("Anagram");
    }
    else{
        console.log("Not a Anagram");        
    }

}

isAnagram("hello","world")