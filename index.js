let imgClass = document.getElementById('parentsImg').getElementsByTagName('img');
var timer = setInterval(rightClick, 4000);

$(document).ready(function() {
    imgClass[0].classList.add(0);
    imgClass[0].style.zIndex = '10';
    for (let i = 1; i < imgClass.length; i++) {
        imgClass[i].style.zIndex = '0';
        imgClass[i].classList.add(i);
        imgClass[i].style.display = 'none'
    }
})

function restartTimer() {
    clearInterval(timer);
    timer = setInterval(rightClick, 4000);
}

function rightClick() {
    restartTimer();
    let temp;
    for (let i = 0; i < imgClass.length; i++) {
        if (imgClass[i].style.zIndex != "0") {
            if (i < imgClass.length-1) {
                temp = i;
                $(`.${imgClass[++i].className}`).animate({width: "toggle", right: '0'}, 400, "linear", function() {
                    imgClass[i].removeAttribute("style");
                });
                $(`.${imgClass[temp].className}`).animate({width: "toggle"}, 400, "linear", function() {
                    imgClass[i].removeAttribute("style");
                });
                imgClass[temp].style.zIndex = '0';
                imgClass[i].style.zIndex = '10';
            } else {
                imgClass[0].style.zIndex = '10';
                temp = i;
                $(`.${imgClass[0].className}`).animate({width: "toggle", right: '0'}, 400, "linear", function() {
                    imgClass[0].style.cssText = "z-index: 10;";
                });
                $(`.${imgClass[temp].className}`).animate({width: "toggle"}, 400, "linear", function() {
                    imgClass[temp].style.zIndex = '0';
                });
            }
            break;
        }
    }
}

function leftClick() {
    restartTimer();
    let temp;
    for (let i = 0; i < imgClass.length; i++) {
        if (imgClass[i].style.zIndex != "0") {
            if (i != 0) {
                temp = i;
                $(`.${imgClass[--i].className}`).animate({width: "toggle"}, 400, "linear", function() {
                });
                $(`.${imgClass[temp].className}`).animate({width: "toggle", right: '0'}, 400, "linear", function() {
                    imgClass[temp].removeAttribute("style");
                    imgClass[temp].style.cssText = "display: none; z-index: 0;";
                });
                imgClass[i].style.zIndex = '10';
            }
            else {
                temp = i;
                $(`.${imgClass[imgClass.length-1].className}`).animate({width: "toggle"}, 400, "linear", function() {
                });
                $(`.${imgClass[0].className}`).animate({width: "toggle", right: '0'}, 400, "linear", function() {
                    imgClass[0].removeAttribute("style");
                    imgClass[0].style.cssText = 'z-index: 0; display: none;';
                });
                imgClass[imgClass.length-1].style.cssText = 'z-index: 10;';
            }
            break;
        }
    }   
}