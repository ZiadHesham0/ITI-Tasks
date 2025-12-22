// 1-
// let userWord = prompt("Enter Ur word");
// let confirmation = window.confirm("Confirm to consider Case");
// let res = true;
// if (confirmation) {
//     for (let i = 0; i <= (userWord.length/2); i++) {
//         if ((userWord[i] !== userWord[userWord.length-1 - i])) {
//             res = false;
//         }
//     }    
// }
// else {
//     for (let i = 0; i <= userWord.length / 2; i++) {
//         if (!(userWord[i].toLocaleLowerCase() === userWord[userWord.length-1 - i].toLocaleLowerCase())) {
//             res = false;
//         }
//     }
// }
// if(res)
//     console.log("palindrome");
// else 
//     console.log("Not palindrome");








///////////////////////////////////////
// 1.2-
// var counter = 0;
// let str1 = "heeeeello"
// for(var i = 0 ; i < str1.length ; i++)
// {
//     if(str1.charAt(i) === 'e')
//     {
//         counter++;
//     }
// }
// console.log("e counter : ",counter);









////////////////////////////////////
// 2-
// let radius = +prompt("Enter circle's radius ");
// console.log(radius);

// if(isNaN(radius)|| radius == ''){
//     throw ("Enter a number plz");
// }
// else
// {
//     alert("the is area is : " + Math.PI*radius*radius);
// }









//////////////////////////////////
// 2.2 -
let sqr = +prompt("enter the num");
if(isNaN(sqr)){
    throw ("Enter a number plz");
}else
{
    alert("the is sqr is : " + Math.sqrt(sqr));
}




















////////////////////
//3-
// var firstNum  = +prompt("enter the first number");
// var secNum = +prompt("enter the Second number");
// var thirdNum = +prompt("Enter the third number");
// var numbers = [firstNum,secNum,thirdNum];
// let sum =firstNum;
// let Multiplication = firstNum;
// let Devision = firstNum;
// if(isNaN(firstNum) || isNaN(secNum) || isNaN(thirdNum))
// {
//     throw"Enter Only Numbers !";
// }
// for(let i = 1 ; i < 3 ; i++)
// {
//     sum+=numbers[i];
//     Multiplication*=numbers[i];
//     Devision/=numbers[i];
// }
// console.log(`Sum of the 3 values ${firstNum}+${secNum}+${thirdNum} is ${sum}`);
// console.log(`Multiplication of the 3 values ${firstNum}*${secNum}*${thirdNum} is ${Multiplication}`);
// console.log(`Devision of the 3 values ${firstNum}/${secNum}/${thirdNum} is ${Devision}`);














/////////////////////////////
// 4-
// var firstNum  = +prompt("enter the first number");
// var secNum = +prompt("enter the Second number");
// var thirdNum = +prompt("Enter the third number");
// var fourthNum = +prompt("Enter the fourth number");
// var fifthNum = +prompt("Enter the fifth number");
// var numbers = [firstNum,secNum,thirdNum,fourthNum,fifthNum];
// function descSelectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < arr.length - 1; i++) {
//         let min = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] > arr[min]) {

//                 min = j;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[min];
//         arr[min] = temp;
//     }
// }
// function ascSelectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < arr.length - 1; i++) {
//         let min = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {

//                 min = j;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[min];
//         arr[min] = temp;
//     }
// }
// ascSelectionSort(numbers);
// console.log("Asc Array");

// numbers.forEach(number => {
//     console.log(`${number}`);
// });
// descSelectionSort(numbers);
// console.log("Desc Array");
// numbers.forEach(number=>{
//     console.log(`${number}`);
// })


