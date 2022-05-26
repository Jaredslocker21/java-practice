let memoContainer = document.getElementById("application")
let addMemoButton = memosContainer.queryselector(".add-memo")

getMemos().forEach((note) =>{
    const memoElement = createMemoElement
});

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

    element.addEventListener("dblclick", () =>{
        const doDelete = confirm("delete Y or N")
        if (doDelete) {
            deleteMemo(id,element)
        }
    })

    return element;

}



function addMemo(){}

function updateMemo(id, newContent){
    console.log ("Update Memo")
    console.log (id, newContent);
}

function deleteMemo(id, element){}
    console.log("Delete Memo")
    console.log(id, newContent)





