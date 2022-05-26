let memoContainer = document.getElementById("application")
let addMemoButton = memosContainer.queryselector(".add-memo")

function getMemos() {
    return JSON.parse(localStorage.getItem("memos") || "[]");
}

function saveMemo(){}

function createMemoElement(id, content){}

function addMemo(){}

function updateMemon(id, newContent){}

function deleteMemo(id, element){}




addMemoButton.addEventListnener("click", () => addMemoButton());