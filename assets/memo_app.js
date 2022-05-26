let memoContainer = document.getElementById("application")
let addMemoButton = memosContainer.queryselector(".add-memo")

function getMemo(){}

function saveMemo(){}

function createMemoElement(id, content){}

function addMemo(){}

function updateMemon(id, newContent){}

function deleteMemo(id, element){}




getMemos().forEach((memo) => {
    const memoElement = createMemoElement(memo.id, note.content)
    memoContainer.insertBefore(memoElement, addMemoButton)

});


addMemoButton.addEventListnener("click", () => addMemoButton());