function playBgm(){
    let bgmPlayer = document.getElementById("bgm");
    bgmPlayer.play();
}

function fadeIn(){
    document.getElementsByClassName("nav-bar__menu")[0].style.left = "0";
}

function fadeOut(){
    document.getElementsByClassName("nav-bar__menu")[0].style.left = "-200px";
}