let myBookmarks = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let bookmarksFromLocalStorage = localStorage.getItem("myBookmarks")
if(bookmarksFromLocalStorage)showBookmarks()

inputBtn.addEventListener("click", function(){  
        let inputValue  = inputEl.value
        myBookmarks.push(inputValue)
        inputEl.value = "";
       
        localStorage.setItem("myBookmarks", JSON.stringify(myBookmarks))
        showBookmarks() 
        
      
      
});
console.log(localStorage.getItem("myBookmarks"))
function showBookmarks(){
    let listItems = ""
    myBookmarks = JSON.parse(localStorage.getItem("myBookmarks"))
    for(item of myBookmarks){
        listItems += `
        <li> 
            <a target = _blank href= https://${item}> ${item} </a>
        </li> `
    }
    ulEl.innerHTML = listItems
    
}
