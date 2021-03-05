let imgClass = document.getElementById('parentsImg').getElementsByTagName('img');
var timer = setInterval(rightClick, 4000);

$(document).ready(function() {
    imgClass[0].classList.add(0);
    imgClass[0].style.zIndex = '10';
    for (let i = 1; i < imgClass.length; i++) {
        imgClass[i].style.zIndex = '0';
        imgClass[i].classList.add(i);
        $("."+`${imgClass[i].className}`).slideToggle();
    }
})

function restartTimer() {
    clearInterval(timer);
    timer = setInterval(rightClick, 4000);
}

function rightClick() {
        let temp;
        for (let i = 0; i < imgClass.length; i++) {
            if (imgClass[i].style.zIndex != "0") {
                imgClass[i].style.zIndex = '0';
                if (i < imgClass.length-1) {
                    temp = i;
                    $("."+`${imgClass[++i].className}`).toggle(400, "linear", function () {
                        $("."+`${imgClass[temp].className}`).toggle(0)
                    });
                    imgClass[i].style.zIndex = '10';
                } else {
                    imgClass[0].style.zIndex = '10';
                    temp = i;
                    $("."+`${imgClass[0].className}`).toggle(400, "linear", function () {
                        $("."+`${imgClass[temp].className}`).toggle(0)
                    });
                }
                break;
            }
        }
        restartTimer();
    }

function leftClick() {
    let temp;
    for (let i = 0; i < imgClass.length; i++) {
        if (imgClass[i].style.zIndex != "0") {
            imgClass[i].style.zIndex = '0';
            if (i != 0) {
                temp = i;
                $("."+`${imgClass[--i].className}`).toggle(400, "linear", function () {
                    $("."+`${imgClass[temp].className}`).toggle(0)
                });
                imgClass[i].style.zIndex = '10';
            }
            else {
                imgClass[3].style.zIndex = '10';
                temp = i;
                $("."+`${imgClass[3].className}`).toggle(400, "linear", function () {
                    $("."+`${imgClass[temp].className}`).toggle(0)
                });
            }
            break;
        }
    }   
    restartTimer();
}