let memoContainer = document.getElementById("application")
let addMemoButton = memosContainer.queryselector(".add-memo")


getMemos().forEach((memo) => {
    const memoElement = createMemoElement(memo.id, note.content)
    memoContainer.insertBefore(memoElement, addMemoButton)

});


addMemoButton.addEventListnener("click", () => addMemoButton());