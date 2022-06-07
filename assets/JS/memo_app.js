// Adapted from turtorials and research
//https://www.youtube.com/watch?v=01YKQmia2Jw
//https://www.youtube.com/watch?v=Bav5SL8-sI4
//https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
//https://www.w3schools.com/jsref/met_storage_getitem.asp
//https://www.youtube.com/watch?v=AWcZcJaIntQ

let memosContainer = document.getElementById("application");
let addMemoButton = memosContainer.querySelector(".create-memo");

/**JSON.stringify() ... 
 * A common use of JSON is to exchange data to/from a web server. When sending data to a web server, the data has to be a string.
 * he setItem() method sets the value of the specified Storage Object item. The setItem() method belongs to the Storage Object
 */
function saveMemos(memos) {
    localStorage.setItem("remember-memos", JSON.stringify(memos));
}
// The getItem() method of the Storage interface, when passed a key name, will return that key's value
function getMemos() {
    return JSON.parse(localStorage.getItem("remember-memos") || "[]");
}
// Create a new memo
function createMemoElement(id, content) {
    const element = document.createElement("textarea");
    //refering to a text area element and CSS class Id
    element.classList.add("memo");
    element.value = content;
    element.placeholder = "Double Click to Delete";
    // event listener to add updated content
    element.addEventListener("change", () => {
        updateMemo(id, element.value);
    });
    //Delete  a memo 
    element.addEventListener("dblclick", () => {
        let doDelete = deleteMemo(id, element);
    });

    return element;
}

// Adding a memo
function addMemo() {
    let currentMemo = getMemos();
    let memoObject = {
        id: Math.floor(Math.random() * 70000),
        content: ""
    };

    let memoElement = createMemoElement(memoObject.id, memoObject.content);
    memosContainer.insertBefore(memoElement, addMemoButton);
    //The push() method adds new items to the end of an array. 
    //The push() method changes the length of the array. The push() method returns the new length.
    currentMemo.push(memoObject);

}
//Updating a memo 
function updateMemo(id, newContent) {
    // to do purge local storage and check if breaks. It does not and retains.
    let memos = getMemos();
    let targetMemo = memos.filter(memo => memo.id === id)[0];
    if (targetMemo) {
        targetMemo.content = newContent;
    } else {
        targetMemo = { id, content: newContent,
        };
    }
    saveMemos([...memos, targetMemo]);

}
// Deleting  a memo.
function deleteMemo(id, element) {
    let memos = getMemos().filter(memo => memo.id != id);
    // removing a memo from the saved memo array. 
    saveMemos(memos);
    memosContainer.removeChild(element);
}
// Event listener Click for new memo
addMemoButton.addEventListener("click", () => addMemo());
//The forEach() method calls a function for each element in an array.
getMemos().forEach((memo) => {
    let memoElement = createMemoElement(memo.id, memo.content);
    memosContainer.insertBefore(memoElement, addMemoButton);
});