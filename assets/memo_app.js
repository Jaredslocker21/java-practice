let memoContainer = document.getElementById("application")
let addMemoButton = memosContainer.queryselector(".add-memo")

function getMemos() {
    return JSON.parse(localStorage.getItem("memo-memos") || "[]");
}

function saveMemos(memos){
    localStorage.setItem("memo-memos", JSON.stringify(memos))

}

function createMemoElement(id, content){
    const element = document.createElement("textarea");

    element.classList.add("memo")
    element.value = content;
    element.placeholder = "Keep Organized";

    element.addEventListener("change", () => {
        updateMemo(id, element.value);
});

    return element;

}



function addMemo(){}

function updateMemo(id, newContent){}

function deleteMemo(id, element){}




addMemoButton.addEventListnener("click", () => addMemoButton());