function GoToAction(info:string, tab:string) {
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
}

//chrome.contextMenus.onClicked.addListener(GoToAction);

let parentHook = chrome.contextMenus.create({"Title": "MovieSearch", "id": "parent"})
let filmWebHook = chrome.contextMenus.create({"Title": "FilmWeb", "parentId": "parent", "onclick": GoToAction})
let imdbHook = chrome.contextMenus.create({"Title": "Imdb", "parentId": "parent", "onclick": GoToAction})
