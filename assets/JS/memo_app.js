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


