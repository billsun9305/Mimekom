// var request = new XMLHttpRequest();
// request.open("GET", "../data.json", false);
// request.send(null)
// var data = JSON.parse(request.responseText);

var data = [
    {
        "Title": "測試標題",
        "Date": "2020-09-18",
        "Tags": "test",
        "Content": "爾摩知道是粉嗎我的東西，本講話，我地的表是已經是，到會可以去我是多不各種。才知道⋯打的人我更最之該⋯的的遊戲方式我說得有書什麼我，的電腦其。是因，知道是稍微肚子其是，次麼你帶一提隊長東西，就不會？時間馬遊戲的看丟也太可是不是，託不要⋯的同第一時候類道自己。習慣到對方恐怖知道的感覺，有興雖然我網路。們真了腦經歷突然有那個⋯不會啦家的物的面那個。所以那你候關係嚴重問我⋯哈哈哈好有好感動，的食深淵本來以經：看第了有好喜歡了一。"
    },
    {
        "Title": "你好",
        "Date": "2020-10-12",
        "Tags": "test happy",
        "Content": "不知道結果就都超好不下去，最喜歡關心麼辦下來了物會，剛發現他應該類的枕頭在這哈哈，過這種要不要把他會有安安。少點小如果我忘了出了昨天⋯嘛是拿我看到東擊正確的前的，剩嗚嗚嗚。天才好新品可愛今劍，服務業請還領都會被，的寶別人得這手⋯可以就後就與。這傢伙以這工作，黏土生日是一般啊啊啊全世一是他⋯整個要幹嘛，看看現在我沒有歡迎。是否叫再一，反正想看覺得：尤其是，去福爾摩種事機車。覺得可是這我不沒。今天早家裡了我都所有這幾，關係油好可是怎樣現在就可以，要看裡會這麼了在有？"
    },
    {
        "Title": "嗨",
        "Date": "2020-11-22",
        "Tags": "test bad",
        "Content": "不知道結果就都超好不下去，最喜歡關心麼辦下來了物會，剛發現他應該類的枕頭在這哈哈，過這種要不要把他會有安安。少點小如果我忘了出了昨天⋯嘛是拿我看到東擊正確的前的，剩嗚嗚嗚。天才好新品可愛今劍，服務業請還領都會被，的寶別人得這手⋯可以就後就與。這傢伙以這工作，黏土生日是一般啊啊啊全世一是他⋯整個要幹嘛，看看現在我沒有歡迎。是否叫再一，反正想看覺得：尤其是，去福爾摩種事機車。覺得可是這我不沒。今天早家裡了我都所有這幾，關係油好可是怎樣現在就可以，要看裡會這麼了在有？"
    },
    {
        "Title": "嗨1",
        "Date": "2020-11-22",
        "Tags": "test bad",
        "Content": "不知道結果就都超好不下去，最喜歡關心麼辦下來了物會，剛發現他應該類的枕頭在這哈哈，過這種要不要把他會有安安。少點小如果我忘了出了昨天⋯嘛是拿我看到東擊正確的前的，剩嗚嗚嗚。天才好新品可愛今劍，服務業請還領都會被，的寶別人得這手⋯可以就後就與。這傢伙以這工作，黏土生日是一般啊啊啊全世一是他⋯整個要幹嘛，看看現在我沒有歡迎。是否叫再一，反正想看覺得：尤其是，去福爾摩種事機車。覺得可是這我不沒。今天早家裡了我都所有這幾，關係油好可是怎樣現在就可以，要看裡會這麼了在有？"
    },
    {
        "Title": "嗨2",
        "Date": "2020-11-22",
        "Tags": "test bad",
        "Content": "不知道結果就都超好不下去，最喜歡關心麼辦下來了物會，剛發現他應該類的枕頭在這哈哈，過這種要不要把他會有安安。少點小如果我忘了出了昨天⋯嘛是拿我看到東擊正確的前的，剩嗚嗚嗚。天才好新品可愛今劍，服務業請還領都會被，的寶別人得這手⋯可以就後就與。這傢伙以這工作，黏土生日是一般啊啊啊全世一是他⋯整個要幹嘛，看看現在我沒有歡迎。是否叫再一，反正想看覺得：尤其是，去福爾摩種事機車。覺得可是這我不沒。今天早家裡了我都所有這幾，關係油好可是怎樣現在就可以，要看裡會這麼了在有？"
    },
    {
        "Title": "嗨3",
        "Date": "2020-11-22",
        "Tags": "test bad",
        "Content": "不知道結果就都超好不下去，最喜歡關心麼辦下來了物會，剛發現他應該類的枕頭在這哈哈，過這種要不要把他會有安安。少點小如果我忘了出了昨天⋯嘛是拿我看到東擊正確的前的，剩嗚嗚嗚。天才好新品可愛今劍，服務業請還領都會被，的寶別人得這手⋯可以就後就與。這傢伙以這工作，黏土生日是一般啊啊啊全世一是他⋯整個要幹嘛，看看現在我沒有歡迎。是否叫再一，反正想看覺得：尤其是，去福爾摩種事機車。覺得可是這我不沒。今天早家裡了我都所有這幾，關係油好可是怎樣現在就可以，要看裡會這麼了在有？"
    },
    {
        "Title": "嗨4",
        "Date": "2020-11-22",
        "Tags": "test bad",
        "Content": "不知道結果就都超好不下去，最喜歡關心麼辦下來了物會，剛發現他應該類的枕頭在這哈哈，過這種要不要把他會有安安。少點小如果我忘了出了昨天⋯嘛是拿我看到東擊正確的前的，剩嗚嗚嗚。天才好新品可愛今劍，服務業請還領都會被，的寶別人得這手⋯可以就後就與。這傢伙以這工作，黏土生日是一般啊啊啊全世一是他⋯整個要幹嘛，看看現在我沒有歡迎。是否叫再一，反正想看覺得：尤其是，去福爾摩種事機車。覺得可是這我不沒。今天早家裡了我都所有這幾，關係油好可是怎樣現在就可以，要看裡會這麼了在有？"
    },
    {
        "Title": "嗨5",
        "Date": "2020-11-22",
        "Tags": "test bad",
        "Content": "不知道結果就都超好不下去，最喜歡關心麼辦下來了物會，剛發現他應該類的枕頭在這哈哈，過這種要不要把他會有安安。少點小如果我忘了出了昨天⋯嘛是拿我看到東擊正確的前的，剩嗚嗚嗚。天才好新品可愛今劍，服務業請還領都會被，的寶別人得這手⋯可以就後就與。這傢伙以這工作，黏土生日是一般啊啊啊全世一是他⋯整個要幹嘛，看看現在我沒有歡迎。是否叫再一，反正想看覺得：尤其是，去福爾摩種事機車。覺得可是這我不沒。今天早家裡了我都所有這幾，關係油好可是怎樣現在就可以，要看裡會這麼了在有？"
    }
]

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
    var element = document.getElementById(elementId)
    element.parentNode.removeChild(element)
}

function loadPage() {
    var ul = getUl()

    ul.innerHTML = ''

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
        line.setAttribute("class", "top-line line")
        ul.appendChild(line)
        ul.appendChild(newLi(keyData[i]))
        var line = document.createElement("div")
        line.setAttribute("class", "bot-line line")
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