let imgClass = document.getElementsByClassName('img');
var timer = setInterval(rightClick, 4000);

$(document).ready(function() {
    imgClass[0].classList.add(0);
    imgClass[0].style.zIndex = '10';
    for (let i = 1; i < imgClass.length; i++) {
        imgClass[i].style.zIndex = '0';
        imgClass[i].classList.add(i);
        $("."+`${imgClass[i].classList[1]}`).slideToggle();
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
                    $("."+`${imgClass[++i].classList[1]}`).slideToggle(300, "linear");
                    imgClass[i].style.zIndex = '10';
                    temp = --i;
                } else {
                    imgClass[0].style.zIndex = '10';
                    $("."+`${imgClass[0].classList[1]}`).slideToggle(300, "linear");
                    temp = i;
                }
                break;
            }
        }
        $("."+`${imgClass[temp].classList[1]}`).toggle("slow", "linear");
        restartTimer();
    }

function leftClick() {
    let temp;
    for (let i = 0; i < imgClass.length; i++) {
        if (imgClass[i].style.zIndex != "0") {
            imgClass[i].style.zIndex = '0';
            if (i != 0) {
                $("."+`${imgClass[--i].classList[1]}`).slideToggle(300, "linear");
                imgClass[i].style.zIndex = '10';
                temp = ++i;
            }
            else {
                imgClass[3].style.zIndex = '10';
                $("."+`${imgClass[3].classList[1]}`).slideToggle(300, "linear");
                temp = i;
            }
            break;
        }
    }   
    $("."+`${imgClass[temp].classList[1]}`).toggle("slow", "linear"); 
    restartTimer();
}