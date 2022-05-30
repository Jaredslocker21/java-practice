//**BMI calculator */

let button = document.querySelector("#btn");
button.addEventListener("click", calculateBMI);

// Function for calculating BMI
function calculateBMI() {

/**Input height function as a string*/
let height = parseInt(document
        .querySelector("#height").value);

/**  Input weigth as a string*/
let weight = parseInt(document
        .querySelector("#weight").value);

let result = document.querySelector("#result");

// Correcting the values provided
if (height === "" || isNaN(height)) 
    result.innerHTML = "Invalid height";

else if (weight === "" || isNaN(weight)) 
    result.innerHTML = "Invalid weight!";

// If both input is valid, calculate the bmi
else {

    // Fixes up too two decimal points
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Results of BMI prints the result
    if (bmi < 18.6) result.innerHTML =
        `Under Weight : <span>${bmi}</span>`;

    else if (bmi >= 18.6 && bmi < 24.9) 
        result.innerHTML = 
            `Normal : <span>${bmi}</span>`;

    else result.innerHTML =
        `Over Weight : <span>${bmi}</span>`;
}
}