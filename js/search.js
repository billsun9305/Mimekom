var request = new XMLHttpRequest();
request.open("GET", "../data.json", false);
request.send(null)
var data = JSON.parse(request.responseText);

// var data=

var nowPage = 1
var pageNum = 1
var showBlock = 5
var nowList = []
var keyword = ""

function getUl() {
    return document.getElementById("myUl")
}

function newLi(s) {
    var node = document.createElement("div")
    node.setAttribute("id", s.Title)
    node.setAttribute("class", "block")

    var title = document.createElement("p")
    title.setAttribute("class", "md-title")
    title.innerHTML = s.Title
    node.appendChild(title)

    var content = document.createElement("p")
    content.setAttribute("class", "md-text")
    content.innerHTML = s.Content
    node.appendChild(content)
    return node
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function loadPage() {
    var ul = getUl()

    for (var i = 0; i < nowList.length; i++) {
        removeElement(nowList[i].Title)
    }

    var keyData = []

    for (var i = 0; i < data.length; i++) {
        if (data[i].Title.includes(keyword) || data[i].Tags.includes(keyword)) {
            keyData.push(data[i])
        }
    }

    nowList = []

    // handling page
    for (var i = (nowPage - 1) * showBlock; i < (nowPage) * showBlock && i < keyData.length; i++) {
        nowList.push(keyData[i])
        var line = document.createElement("div")
        line.setAttribute("class", "top-line")
        ul.appendChild(line)
        ul.appendChild(newLi(keyData[i]))
        var line = document.createElement("div")
        line.setAttribute("class", "bot-line")
        ul.appendChild(line)
    }

    // get new page number
    pageNum = Math.floor(keyData.length / showBlock) + 1
    // remove existing child
    var element = document.getElementById("Change-page");
    element.innerHTML = ''
    // add new child
    console.log(pageNum)
    for (var i = 1; i <= pageNum; i++) {
        var node = document.createElement("a")
        node.setAttribute("class", "page-btn")
        node.setAttribute("id", i)
        // node.setAttribute("href", '')
        node.innerHTML = i
        // node.setAttribute("class", "page-btn")
        element.appendChild(node)
    }
    // add event listener for new added btn
    var elements = document.getElementsByClassName('page-btn');

    Array.from(elements).forEach(function (element) {
        element.addEventListener('click', myFunction);
    });
}

document.getElementById('search').addEventListener('input', function () {
    console.log("search", this.value)
    if (!this.value) {
        keyword = ""
    }
    else {
        keyword = this.value
    }
    loadPage()
});

var myFunction = function () {
    var pageId = jQuery(this).attr("id");
    console.log("page", pageId)
    nowPage = pageId
    loadPage()
};
loadPage()
// document.getElementsByClassName('page-btn').addEventListener('click', function () {
//     var pageId = jQuery(this).attr("id");
//     console.log("page", pageId)
//     nowList = pageId
//     loadPage()
// });