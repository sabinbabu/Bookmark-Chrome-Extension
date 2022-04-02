let myBookmarks = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const delBtn = document.getElementById("delete-btn")

const bookmarksFromLocalStorage = localStorage.getItem("myBookmarks")
if(bookmarksFromLocalStorage){
    myBookmarks = bookmarksFromLocalStorage
    showBookmarks()
}

inputBtn.addEventListener("click", function(){  
        let inputValue  = inputEl.value
        myBookmarks.push(inputValue)
        inputEl.value = "";
       
        localStorage.setItem("myBookmarks", JSON.stringify(myBookmarks))
        showBookmarks()             
});

delBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myBookmarks = []
    showBookmarks();
});

console.log(localStorage.getItem("myBookmarks"))
function showBookmarks(){
    let listItems = ""
  
    for(item of myBookmarks){
        listItems += `
        <li> 
            <a target = _blank href= https://${item}> ${item} </a>
        </li> `
    }
    ulEl.innerHTML = listItems
    
}
