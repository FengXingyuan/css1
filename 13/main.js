var curPage = 1;
//document.getElementsByClassName("main__indicator")[0].style.background = "#fbb435";

function next() {
    switch (curPage) {
        case 1:
            document.getElementsByClassName("canvas")[0].style.left = "calc(-100% - 80px)";
            document.getElementsByClassName("main__indicator")[1].style.background = "#fbb435";
            document.getElementsByClassName("main__indicator")[0].style.background = "white";
            curPage = 2;
            break;
        case 2:
            document.getElementsByClassName("canvas")[0].style.left = "calc(-200% - 160px)";
            document.getElementsByClassName("main__indicator")[2].style.background = "#fbb435";
            document.getElementsByClassName("main__indicator")[1].style.background = "white";
            curPage = 3;
            break;
        case 3:
            document.getElementsByClassName("canvas")[0].style.left = "0";
            document.getElementsByClassName("main__indicator")[0].style.background = "#fbb435";
            document.getElementsByClassName("main__indicator")[2].style.background = "white";
            curPage = 1;
            break;
    }
}

var roll = setInterval(next, 5000);