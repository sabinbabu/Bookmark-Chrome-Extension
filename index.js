let myBookmarks = []
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delBtn = document.getElementById("delete-btn")

const bookmarksFromLocalStorage = JSON.parse(localStorage.getItem("myBookmarks"))
if(bookmarksFromLocalStorage){
    myBookmarks = bookmarksFromLocalStorage
    showBookmarks(myBookmarks)
}


inputBtn.addEventListener("click", function(){  
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myBookmarks.push(tabs[0].url)
        localStorage.setItem("myBookmarks", JSON.stringify(myBookmarks))
        showBookmarks(myBookmarks)
    })
});

delBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myBookmarks = []
    showBookmarks(myBookmarks);
});


function showBookmarks(savedBookmarks){
    let listItems = ""
    for(item of savedBookmarks){
        listItems += `
        <li> 
            <a target = _blank href= https://${item}> ${item} </a>
        </li> `
    }
    ulEl.innerHTML = listItems
    
}
