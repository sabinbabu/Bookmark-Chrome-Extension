let myBookmarks = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){   
    myBookmarks.push(inputEl.value)
    showBookmarks()   
});

function showBookmarks(){
    let listItems = ""
    for(item of myBookmarks){
        listItems += "<li>" + item + "</li> "
    }
    
    ulEl.innerHTML = listItems
    
}
