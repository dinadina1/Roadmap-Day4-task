//Question 1.a) Print odd numbers in an array
// Anonymous Function

var odd=function(num){
    for(var i=0;i<num.length;i++){
        if(num[i]%2!==0){
            arr.push(num[i]);
        }
    }
    return arr;
}
var arr=[];
console.log("Odd Numbers are : "+odd([1,2,3,4,5,6,7,8,9,10]));

/*
Result : Odd Numbers are : 1,3,5,7,9
*/

//==========================================================================
//Question 1.a) Print odd numbers in an array
//IIFE Function

var arr=[];
(function (num){
    for(var i=0;i<num.length;i++){
        if(num[i]%2!==0){
            arr.push(num[i]);
        }
    }
})([1,2,3,4,5,6,7,8,9,10]);
console.log("Odd Numbers are : "+arr);

/*
Result : Odd Numbers are : 1,3,5,7,9
*/

//--------------------------------------------------------------------------------------------------------------

//Question 1.b) Convert all the strings to title caps in a string array
// Anonymous Function

var titlecase=function(str){
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

//=============================================================
//Question 1.b) Convert all the strings to title caps in a string array
//IIFE Function

(function (str){
     str=str.toLowerCase().split(" ");
    for(var i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }   
    console.log(str.join(" "));
})("hOw aRe you");

/*
Result : How Are You
*/

//-------------------------------------------------------------------------------------------------------------------

//Question 1.c) Sum of all numbers in an array
// Anonymous Function

var sum=function(add){
    var num=0;
    for(var i=0;i<add.length;i++){
        num=num+add[i];
    }
    return num;
}
console.log("sum of the numbers is : "+sum([1,2,3,4,5]));

/*
Result : sum of the numbers is : 15
*/

//=======================================================================
//Question 1.c) Sum of all numbers in an array
//IIFE Function

(function (add){
     var num=0;
    for(var i=0;i<add.length;i++){
        num=num+add[i];
    }   
    console.log("sum of the numbers is : "+num);
})([1,2,3,4,5]);

/*
Result : sum of the numbers is : 15
*/

//--------------------------------------------------------------------------------------

//Question 1.d) Return all the prime numbers in an array
// Anonymous Function

var output=[];
var prime=function(num){
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
console.log("Prime Numbers are "+prime([1,2,3,4,5]));

/*
Result : Prime Numbers are 2,3,5
*/

//==========================================================================================
//Question 1.d) Return all the prime numbers in an array
//IIFE Function

var output=[];
(function(num){
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
})([1,2,3,4,5]);
console.log("Prime Numbers are "+output);

/*
Result : Prime Numbers are 2,3,5
*/

//----------------------------------------------------------------------------------------------------

//Question 1.e) Return all the palindromes in an array
// Anonymous Function

var palindrome=function(str){
    for(var i=0;i<str.length;i++){
        var st=str[i].split("").reverse().join("");
        if(st==str[i]){
            output.push(str[i]);
        }
    }
    return output;
}
var output=[];
console.log("Palindromes are : "+palindrome(["mom","sister","dad","brother","madam"]));

/*
Result : Palindromes are : mom,dad,madam
*/

//======================================================================================
//Question 1.e) Return all the palindromes in an array
//IIFE Function

var output=[];
(function(str){
    for(var i=0;i<str.length;i++){
        var st=str[i].split("").reverse().join("");
        if(st==str[i]){
            output.push(str[i]);
        }
    }
    return output;
})
(["mom","sister","dad","brother","madam"]);
console.log("Palindromes are : "+output);

/*
Result : Palindromes are : mom,dad,madam
*/

//-------------------------------------------------------------------------------------------------------

//Question 1.f) Return median of two sorted arrays of the same size.
// Anonymous Function

var array=function(arr1,arr2,len1){
    var a=0,b=0;
    var m=-1,n=-1;
    for(var i=0;i<=len1;i++){
        if(a==len1){
            m=n;
            n=arr2[0];
            break;
        }
        else if(b==len1){
            m=n;
            n=arr1[0];
            break;
        }
        else if(arr1[a]<=arr2[b]){
            m=n;
            n=arr1[a];
            a++;
        }
        else{
            m=n;
            n=arr2[b];
            b++;
        }
    }
    return (m+n)/2;
}
var arr1=[1,3,6,9,11];
var arr2=[2,5,8,10,13];
if(arr1.length==arr2.length){
    console.log("Median is : "+array(arr1,arr2,arr1.length));
}else{
    console.log("This array size not same.");
}

/*
Result : Median is : 7
*/

//==========================================================================================
//Question 1.f) Return median of two sorted arrays of the same size.
//IIFE Function

(function(arr1,arr2){
    var len1=arr1.length;
    var len2=arr2.length;
    if(len1==len2){
        var a=0,b=0;
        var m=-1,n=-1;
            for(var i=0;i<=len1;i++){
                if(a==len1){
                    m=n;
                    n=arr2[0];
                    break;
                }
                else if(b==len1){
                    m=n;
                    n=arr1[0];
                    break;
                }
                else if(arr1[a]<=arr2[b]){
                    m=n;
                    n=arr1[a];
                    a++;
                }
                else{
                 m=n;
                    n=arr2[b];
                    b++;
            }
    }
    var output=(m+n)/2;
    console.log("Median is : "+output);
    }else{
    console.log("This array size not same.");
    }
})
([1,3,6,9,11],[2,5,8,10,13]);

/*
Result : Median is : 7
*/

//------------------------------------------------------------------------------------------------

//Question 1.g) Remove duplicates from an array
// Anonymous Function

var duplicate=function(str){
    var arr=[];
    for(var i=0;i<str.length;i++){ 
            if(arr.indexOf(str[i])===-1){
                arr.push(str[i]);
            } 
    }
    return arr;
}
console.log("Unique values are : "+duplicate(["mango","banana","apple","banana","mango"]));

/*
Result : Unique values are : mango,banana,apple
*/

//===========================================================================================
//Question 1.g) Remove duplicates from an array
//IIFE Function

var arr=[];
(function(str){
    for(var i=0;i<str.length;i++){ 
            if(arr.indexOf(str[i])===-1){
                arr.push(str[i]);
            }
    }
    return arr;
})(["mango","banana","apple","banana","mango"]);
console.log("Unique values are : "+arr);

/*
Result : Unique values are : mango,banana,apple
*/

//------------------------------------------------------------------------------------------------

//Question 1.h) Rotate an array by k times
// Anonymous Function

var rightrotate=function(str,k){
    var arr=[];
    var len=str.length;
    var k=k%len;
    for(var i=0;i<len;i++){ 
            if(i<k){
                arr.push(str[len+i-k]);
            }else{
                arr.push(str[i-k]);
            }
    }
    return arr;
}
console.log("Rotated Array : " + rightrotate([1,2,3,4,5,6,7],2));

/*
Result : Rotated Array : 6,7,1,2,3,4,5
*/

//================================================================================
//Question 1.h) Rotate an array by k times
// IIFE Function

(function(str,k){
    var arr=[];
    var len=str.length;
    var k=k%len;
    for(var i=0;i<len;i++){ 
            if(i<k){
                arr.push(str[len+i-k]);
            }else{
                arr.push(str[i-k]);
            }
    }
    console.log("Rotated Array : " + arr);
})
([1,2,3,4,5,6,7],2);

/*
Result : Rotated Array : 6,7,1,2,3,4,5
*/

//----------------------------------------------------------------------------------------------------