// Question 2. a) Print odd numbers in an array
// Using Arrow Function

var odd = (num)=>{
    for(var i=0;i<num.length;i++){
        if(num[i]%2!==0){
            arr.push(num[i]);
        }
    }
    return arr;
}
var arr=[];
console.log("Odd Numbers are :"+odd([1,2,3,4,5,6,7,8,9,10]));

/*
    Result : Odd Numbers are :1,3,5,7,9
*/
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
console.log(titlecase("hOw aRe you"));

/*
    Result : How Are You
*/

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
console.log("sum of the numbers is : " + sum([1,2,3,4,5]));

/*
    Result : sum of the numbers is : 15
*/

//=========================================================

// Question 2. d) Return all the prime numbers in an array
// Using Arrow Function

var prime = (num)=>{
    var output=[];
    var count;
    for(var i=0;i<num.length;i++){
        count=0;
        if(num[i]!==1){
        for(var j=1;j<=num[i];j++){
            if(num[i]%j==0){
                count=count+1;
            }
        }
        if(count==2){
            output.push(num[i]);
        }
        }
    }
    return output;
}
console.log("Prime Numbers are : " + prime([1,2,3,4,5]));

/*
    Result : Prime Numbers are : 2,3,5
*/

//=============================================================================

// Question 2. e) Return all the palindromes in an array
// Using Arrow Function

var palindrome = (str)=>{
    var output=[];
    for(var i=0;i<str.length;i++){
        var st=str[i].split("").reverse().join("");
        if(st==str[i]){
            output.push(str[i]);
        }
    }
    return output;
}
console.log("Palindromes are : " + palindrome(["mom","sister","dad","brother","madam"]));

/*
    Result : Palindromes are : mom,dad,madam
*/

//====================================================================================