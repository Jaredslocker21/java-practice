const memosContainer = document.getElementById("application")
const addMemoButton = memosContainer.querySelector(".add-memo")

getMemos().forEach((note) => {
    const memoElement = createMemoElement(memo.id, memo.content)
    memosContainer.insertBefore(memoElement, addMemoButton)
});

addMemoButton.addEventListener("click", () => addMemo());

function getMemos() {
    return JSON.parse(localStorage.getItem("memopad-memos") || "[]");
}

function saveMemos(memos) {
    localStorage.setItem("memopad-memos", JSON.stringify(memos))

}

function createMemoElement(id, content) {
    const element = document.createElement("textarea");

    element.classList.add("memo")
    element.value = content;
    element.placeholder = "Keep Organized";

    element.addEventListener("change", () => {
        updateMemo(id, element.value);
    });

    element.addEventListener("dblclick", () => {
            const doDelete = confirm("delete Memo: OK or Cancel");

        if (doDelete) {
            deleteMemo(id, element)
        }
    });

return element;

}

function addMemo() {
    const currentMemo = getMemos();
    const memoObject = {
        id: Math.floor(Math.random() * 70000),
        content: ""
    };

    const memoElement = createMemoElement(memoObject.id, memoObject.content);
    memosContainer.insertBefore(memoElement, addMemoButton);

    currentMemo.push(memoObject);
    //saveCurrentMemo(memos);
}

function updateMemo(id, newContent) {
    const memos = getMemos();
    const targetMemo = memos.filter(mote => memo.id == id)[0];

    targetMemo.content = newContent;
    saveMemos(memos);

}

function deleteMemo(id, element) {
    const memos = getMemos().filter(memo => note.id != id);

    saveMemos(memos);
    memosContainer.removeChild(element);
}


//**BMI calculator */

let button = document.querySelector("#btn");
  
// Function for calculating BMI
button.addEventListener("click", calculateBMI);

function calculateBMI() {

/* Getting input from user into height variable.
Input is string so typecasting is necessary. */
let height = parseInt(document
        .querySelector("#height").value);

/* Getting input from user into weight variable. 
Input is string so typecasting is necessary.*/
let weight = parseInt(document
        .querySelector("#weight").value);

let result = document.querySelector("#result");

// Checking the user providing a proper
// value or not
if (height === "" || isNaN(height)) 
    result.innerHTML = "Provide a valid Height!";

else if (weight === "" || isNaN(weight)) 
    result.innerHTML = "Provide a valid Weight!";

// If both input is valid, calculate the bmi
else {

    // Fixing upto 2 decimal places
    let bmi = (weight / ((height * height) 
                        / 10000)).toFixed(2);

    // Dividing as per the bmi conditions
    if (bmi < 18.6) result.innerHTML =
        `Under Weight : <span>${bmi}</span>`;

    else if (bmi >= 18.6 && bmi < 24.9) 
        result.innerHTML = 
            `Normal : <span>${bmi}</span>`;

    else result.innerHTML =
        `Over Weight : <span>${bmi}</span>`;
}
}