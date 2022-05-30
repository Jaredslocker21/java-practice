// Adapted from a few different turtorials 
const memosContainer = document.getElementById("application")
const addMemoButton = memosContainer.querySelector(".add-memo")
// creating a  memo from the add button
getMemos().forEach((memo) => {
    const memoElement = createMemoElement(memo.id, memo.content)
    memosContainer.insertBefore(memoElement, addMemoButton)
});
// Event listener. Click for new memo
addMemoButton.addEventListener("click", () => addMemo());
//API for local storage
function getMemos() {
    return JSON.parse(localStorage.getItem("memopad-memos") || "[]");
}
// making a string out of the saved text in the memo
function saveMemos(memos) {
    localStorage.setItem("memopad-memos", JSON.stringify(memos))

}
// Create a new memo
function createMemoElement(id, content) {
    const element = document.createElement("textarea");
    //refering to a text area element and CSS class Id
    element.classList.add("memo")
    element.value = content;
    element.placeholder = "Keep Organized";

    element.addEventListener("change", () => {
        updateMemo(id, element.value);
    });
    //Delete  a memo 
    element.addEventListener("dblclick", () => {
        const doDelete = confirm("delete Memo: OK or Cancel");
        // If double clicked by event listener do delete by a confirm box. The confirm() method returns true if the user clicked "OK"           
        if (doDelete) {
            deleteMemo(id, element)
        }
    });

    return element;

}
// Adding a memo
function addMemo() {
    const currentMemo = getMemos();
    const memoObject = {
        id: Math.floor(Math.random() * 70000),
        content: ""
    };

    const memoElement = createMemoElement(memoObject.id, memoObject.content);
    memosContainer.insertBefore(memoElement, addMemoButton);

    currentMemo.push(memoObject);

}
//Updating a memo 
function updateMemo(id, newContent) {
    // to do purge local storage and check if breaks. It does not and retains.
    const memos = getMemos();
    console.log(memos)
    let targetMemo = memos.filter(memo => memo.id === id)[0];
    if (targetMemo) {
        targetMemo.content = newContent;
    } else {
        targetMemo = {
            id,
            content: newContent
        }
    }
    saveMemos([...memos, targetMemo]);

}
// Deleting  a memo.
function deleteMemo(id, element) {
    const memos = getMemos().filter(memo => memo.id != id);
    // removing a memo from the saved memo array. 
    saveMemos(memos);
    memosContainer.removeChild(element);
}