
const button = document.querySelector("#btn");
const result = document.querySelector("#result");

// Function for calculating BMI
function calculateBMI() {
  /** Input height function as a string*/
  let heightInCm = parseInt(document.querySelector("#height").value);
  /**  Input weigth as a string*/
  let weight = parseInt(document.querySelector("#weight").value);


  // Correcting the values provided
  if (heightInCm === "" || weight === "") {
      result.innerHTML = "Invalid Input";
  } else {
    // Fixes up too two decimal points
    const heightInMtr = heightInCm/100;
    //However, the * operator for example implicity performs this coercion, so you wouldn't need the parseInt.
    const bmi = (weight / (heightInMtr * heightInMtr)).toFixed(2);
        // Results of BMI prints the result
    if (bmi < 18.6) {
      result.innerHTML = `Add Calories : <span>${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `Normal : <span>${bmi}</span>`;
    } else {
      result.innerHTML = `Decreese Calories : <span>${bmi}</span>`;
    }
  }
}

button.addEventListener("click", calculateBMI);