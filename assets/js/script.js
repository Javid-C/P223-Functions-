// let result = prompt("How old are you?")
// if (result < 18) {
//     console.log("You are under 18");
//     result = prompt();
// } else {
//     console.log("its okay");
// }

// while (result < 18) {
//     console.log("you are under 18");
//     result = prompt("How old are you?")
// }

// console.log("its okay");

// Falsy - 0, empty string, null
//Truthy - any number except 0, string with at least 1 character, array,object

// if (null) {
//     console.log("truthy");
// } else {
//     console.log("falsy");
// }


// '' && console.log("first");
// 5 && console.log("second");
// '' || 5 && console.log("third");
// 1 === true || "nuRlan" && console.log("fourth");
// 19 || console.log("fifth");


// Test("a");


// function Test(a) {
//     let string = "Nurlan says: "

//     console.log(string + a);
// }


// function Sum(a, b = 0) {
//     return a + b;
// }

// console.log(Sum(17, 123));

// let max = Math.max(123, 5, 23, 15, 1, 23, 6, 12, 63246, 123, 123)

// console.log(max);

// function SumAllNumber() {
//     let argArr = Array.from(arguments)
//     let result = 0;
//     for (let index = 0; index < argArr.length; index++) {
//         result += argArr[index];

//     }
//     return result;
// }

// console.log(SumAllNumber(123, 5423, 422, 347, 86));


// function customMax() {
//     let arr = Array.from(arguments);
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }


// let result = Math.max(1923, 12312, 12731, 23712)
// console.log(result);

// let res = customMax(5, 23, 74, 25, 90, 45, 189);

// console.log(res);



function func() {
    let result = 5;
    return result;
}

// console.log(func());


// let arrowFunc = (a, b, c) => {
//     console.log("15");
// }



let func2 = a => {
    console.log(a);
}

let func3 = age => { return { Age: age } }

let func4 = age => ({ Age: age })

let func5 = age => ({ age });
// func2("okay")

// console.log(func3(15));
// console.log(func4(19));
// console.log(func5(25));


// let obj = func5(30);
// console.log(obj);


function normFunc() {
    return arguments;
}

let arrowFunc = () => {
    let arguments = 5;
    return arguments
}



// console.log(normFunc());

// console.log(arrowFunc());

// let firstname = "Ahad"

// let obj = {
//     firstname: "Hasan",
//     surname: "Nuruzade",
//     getFirstname: function() {
//         return this;
//     },
//     getFullname: () => {
//         return this;
//     }
// }


// console.log(obj.getFirstname());
// console.log(obj.getFullname());

function sumArrayNumberwithNine(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 9);

    }
    return newArr;
}

function MinusArrayNumberWithFive(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] - 5);

    }
    return newArr;
}

function DivideArrayNumberWithTwo(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] / 2);

    }
    return newArr;
}


// console.log(sumArrayNumberwithNine([1, 6, 9, 24, 56]));
// console.log(MinusArrayNumberWithFive([1, 6, 9, 24, 56]));
// console.log(DivideArrayNumberWithTwo([1, 6, 9, 24, 56]));




// function ProccessArrayNumbers(arr, cb) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let result = cb(arr[i])
//         newArr.push(result)
//     }
//     return newArr;
// }

// function Arraynumberpluswithfive(number) {
//     return number + 5;
// }

// function ArraynumbermultiplywithNine(number) {
//     return number * 9;
// }

// function ArraynumberdividewithThree(number) {
//     return number / 3;
// }


// console.log(ProccessArrayNumbers([4, 6, 8, 13, 45, 67], Arraynumberpluswithfive));
// console.log(ProccessArrayNumbers([4, 6, 8, 13, 45, 67], ArraynumbermultiplywithNine));
// console.log(ProccessArrayNumbers([4, 6, 8, 13, 45, 67], ArraynumberdividewithThree));


// IIFE - immediately invoked function expression


function sum(a, b) {
    return a + b;
}

// console.log(sum(0, 7));



// (function multiply(a, b, c) {
//     return a * b * c;
// })(5, 10, 5)


function getUsername() {
    var username = "helios"

    return username;
}





console.log(username);