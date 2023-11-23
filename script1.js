// Question 2. a) Print odd numbers in an array
// Using Arrow Function

var odd = (num)=>{
    for(var i=0;i<num.length;i++){
        if(num[i]%2!==0){
            arr.push(num[i]);
        }
    }
}
var arr=[];
odd([1,2,3,4,5,6,7,8,9,10]);
console.log("Odd Numbers are :"+arr);

//===============================================

// Question 2. b) Convert all the strings to title caps in a string array
// Using Arrow Function

var titlecase = (str)=>{
    str=str.toLowerCase().split(" ");
    for(var i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    return str.join(" ");
}
var output=(titlecase("hOw are you"));
console.log(output);

//=========================================================

// Question 2. c) Sum of all numbers in an array
// Using Arrow Function

var sum = (add)=>{
    var num=0;
    for(var i=0;i<add.length;i++){
        num=num+add[i];
    }
    return num;
}
var n=(sum([1,2,3,4,5]));
console.log("sum of the numbers is : "+n);

//=========================================================

// Question 2. d) Return all the prime numbers in an array
// Using Arrow Function

var prime = (num)=>{
    var output="";
    var count=0;
    for(var i=0;i<num.length;i++){
        count=0;
        if(num[i]!==1){
        for(var j=1;j<=num[i];j++){
            if(num[i]%j==0){
                count=count+1;
            }
        }
        if(count==2){
            output=output+num[i];
        }
        }
    }
    return output;
}
output=(prime([1,2,3,4,5]));
console.log("Prime Numbers are "+output.split("").join(","));

//=============================================================================

// Question 2. e) Return all the palindromes in an array
// Using Arrow Function

var palindrome = (str)=>{
    var output=[];
    for(var i=0;i<str.length;i++){
        var st=str[i].split("").reverse().join("");
        if(st==str[i]){
            output=output+" "+str[i];
        }
    }
    return output;
}
output=(palindrome(["mom","sister","dad","brother","madam"]));
console.log("Palindromes are "+output.trim());

//====================================================================================