let curPage = 1;

function next() {
    switch (curPage) {
        case 1:
            document.getElementsByClassName("banner__canvas")[0].style.left = "-100%";
            curPage = 2;
            break;
        case 2:
            document.getElementsByClassName("banner__canvas")[0].style.left = "-200%";
            curPage = 3;
            break;
        case 3:
            document.getElementsByClassName("banner__canvas")[0].style.left = "0";
            curPage = 1;
            break;
    }
}

function prev() {
    switch (curPage) {
        case 1:
            document.getElementsByClassName("banner__canvas")[0].style.left = "-200%";
            curPage = 3;
            break;
        case 2:
            document.getElementsByClassName("banner__canvas")[0].style.left = "0";
            curPage = 1;
            break;
        case 3:
            document.getElementsByClassName("banner__canvas")[0].style.left = "-100%";
            curPage = 2;
            break;
    }
}

function jumpTo(link) {
    window.location.href = link;
}

let auto = setInterval(next, 8000);