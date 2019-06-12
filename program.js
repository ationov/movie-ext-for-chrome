function GoToAction(info, tab) {
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
}
//chrome.contextMenus.onClicked.addListener(GoToAction);
var parentHook = chrome.contextMenus.create({ "Title": "MovieSearch", "id": "parent" });
var filmWebHook = chrome.contextMenus.create({ "Title": "FilmWeb", "parentId": "parent", "onclick": GoToAction });
var imdbHook = chrome.contextMenus.create({ "Title": "Imdb", "parentId": "parent", "onclick": GoToAction });
