
// Adapted from a few different turtorials 
const memosContainer = document.getElementById("application")
const addMemoButton = memosContainer.querySelector(".add-memo")

getMemos().forEach((note) => {
    const memoElement = createMemoElement(memo.id, memo.content)
    memosContainer.insertBefore(memoElement, addMemoButton)
});

addMemoButton.addEventListener("click", () => addMemo());
//API for local storage
function getMemos() {
    return JSON.parse(localStorage.getItem("memopad-memos") || "[]");
}

function saveMemos(memos) {
    localStorage.setItem("memopad-memos", JSON.stringify(memos))

}
// Create a new memo
function createMemoElement(id, content) {
    const element = document.createElement("textarea");
    
    element.classList.add("memo") //refering to a text area element and CSS class Id
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


