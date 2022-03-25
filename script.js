// Start your code ***HERE*** =========

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable
const characterArray = (() => {
    let utfStart = 33 //d efine start point numbers, letters, and symbols
    const utfStop = 126 // characters after this index are special characters and cant be used
    const charArray = []

    do {
        charArray.push(String.fromCharCode(utfStart)) // convert numbers to their string value
        utfStart++
    } while (utfStart < utfStop)

    return charArray
})(); // immediately invoke function and store result
// Expect array of letters, numbers, and symbols

// create a global variable called "pwLength" with a number between 10 and 18


// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function


// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

// let genBtn = document.getElementById("btnGen");
// let buttonHandler = () => {
//     document.getElementById("password").value = addNewPassword();
// };
// // Event listener for generate PW button
// genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======
