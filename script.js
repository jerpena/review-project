// Start your code ***HERE*** =========

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable

const data = (() => {
    function generateArray() {
        let utfStart = 33; // define start point numbers, letters, and symbols
        const utfStop = 126; // characters after this index are special characters and cant be used
        const charArray = [];
        do {
            charArray.push(String.fromCharCode(utfStart)); // convert numbers to their string value
            utfStart++;
        } while (utfStart < utfStop)
        return charArray;
    }

    function getUserInput() {
        const input = window.prompt(`Enter password length (min 10) (max 50) \nOr press cancel for a range between 10-18.`);

        if (input === null) { // if user presses cancel 
            return null;
        } else if (!parseInt(input) || parseInt(input) < 10 || parseInt(input) > 50) { // convert string to integer and check value
            window.alert('Please enter a valid number.');
            return getUserInput(); // call itself to restart prompt
        } else {
            window.alert(`You entered: ${input}`) // display entered value
            return parseInt(input); //convert input to number and return
        }

    }

    const userInput = getUserInput(); // assign return value of getUserInput. Expect number or null.

    return { //return an object from IIFE so global namespace is not polluted
        _chars: generateArray(), // expect array of numbers, upper and lowercase letters, and symbols
        _definedLength: userInput, // Expect null or number
        get chars() {
            return this._chars;
        },
        get usersLength() {
            return this._definedLength;
        },
        getPwLength() {
            const min = 10;
            const max = 18;

            if (!this._definedLength) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            return this._definedLength;
            /*
            if definedLength is false (null), return a random length between 10-(max), else
            return the usersLength.
            Math.random is multiplied by the difference in the max and min values + 1, which
            gives us a random number between 0 and 8.9, since it is out of the range, add
            10 to that to give a random number between 10-18.
            */
        }
    }
})(); // immediately invoke function and store result

//console.log(data.chars) // Expect array of letters, numbers, and symbols
//console.log(data.definedLength) // Expect boolean
//console.log(data.getPwLength())

// create a global variable called "pwLength" with a number between 10 and 18

var pwLength = data.getPwLength(); // would prefer to keep this scoped into addNewPassword.

// console.log(pwLength); // Expect number between 10-18 or users number

// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function
function addNewPassword(data, pwLength) {
    let password = '';
    const characterArray = data.chars; // access array stored in data

    for (let i = 0; i < pwLength; i++) {
        const randomChar = Math.floor(Math.random() * characterArray.length);
        password += characterArray[randomChar]; // access random index of array and add to password
    }

    return password;
}

// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword(data, pwLength); // I need to add arguments, sorry! :)
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======
