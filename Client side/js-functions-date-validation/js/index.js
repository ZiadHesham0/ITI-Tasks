function dayName(date)
{
    day = date.getDay();
    let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    console.log(arr[day]);
}

let date = new Date("2024/05/22");
console.log(date);
/////////////////////////////////////////////////////////////////////
// function only2Param()
// {
//     if(arguments.length !== 2)
//     {
//         throw ("Plz enter just 2 parameters");
//     }
// }

// only2Param(1);

/////////////////////////////////////////////////////////////////
// function add()
// {
//     sum=0;
//     for (const argument of arguments) {
//         if(typeof argument != "number")
//             throw("plz enter only int values");
//         sum+=argument;
//     }
//     console.log(sum);
// }

// add(5,2,"zuzzz")
////////////////////////////////////////////
function reverse()
{
    for (let i = arguments.length-1; i >= 0; i--) {
        console.log(arguments[i]);
    }
}
reverse(1,2,3,4);