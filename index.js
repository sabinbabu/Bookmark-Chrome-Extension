let myBookmarks = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const errorEL = document.getElementById("error-el")

inputBtn.addEventListener("click", function(){  
        const inputValue  = inputEl.value
        myBookmarks.push(inputValue)
        inputEl.value = "";
        showBookmarks()       
      
});

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
