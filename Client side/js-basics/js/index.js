///////////1-//////////////


// (a)
// var y;  
// console.log(y); //undefiend 

// (b)
// console.log(y); //Error not defiend 

// (c)
// var x=10; 
// var y = 20;  
// console.log(y*x-2);  // 198

// (d)
// var y;  
// console.log(typeof y);  //undefined 

// (e)
// var x = "1"; 
// var y = 2; 
// console.log(x+y); //"12"

// (f)
// var x = 1;  
// var y = true; 
// console.log(x+y);  //true



///////////2-//////////////

// for(var i = 1 ; i <=6 ; i++)
// {
//     var userInput = prompt("Enter Ur message")
//     document.write("<h"+i+">"+userInput+"</h"+i+">")
// }

///////////3-//////////////

// var sum = 0;
// do{
//     var userInput = prompt("Enter the Number");
//     sum  += +userInput;
// }while( ((sum<=100 && userInput!=0) ) || !userInput );
// console.log(sum);




///////////4-//////////////

do{
    var userName = prompt("Enter the Name");
}while( !userName || ! isNaN(userName)  );


do{
    var userBirth = +prompt("Enter the birthDate");
}while( !userBirth || isNaN(userBirth) || userBirth>2010 );
console.log("age is : " , 2026-userBirth);
