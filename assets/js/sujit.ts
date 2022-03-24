function f()  
{  
    var X = 5; //Available globally inside f()  
    if(true)  
    {  
        var Y = 10; //Available globally inside f()   
        console.log(X); //Output 5  
        console.log(Y); //Output 10  
    }      
    console.log(X); //Output 5  
    console.log(Y); //Output 10  
}  
f();  
console.log(X); //Returns undefined because value cannot accesses from outside function  
console.log(Y); //Returns undefined because value cannot accesses from outside function 