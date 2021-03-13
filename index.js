var imgClass = document.getElementById('parentsImg').getElementsByTagName('img');
var timer = setInterval(function() {
    $('#btn-right').click();
}, 4000);

$(document).ready(function() {
    for (let i = 0; i < imgClass.length; i++) {
        imgClass[i].classList.add(i);
        i != 0 ? imgClass[i].style.display = 'none' : false;
    }
})

function restartTimer() {
    clearInterval(timer);
    timer = setInterval(function() {
        $('#btn-right').click();
    }, 4000);
}

$('#btn-right').click(function() {
    restartTimer();
    for (let i = 0; i < imgClass.length; i++) {
        if (imgClass[i].style.display != "none") {
            if (i < imgClass.length-1) {
                $(`.${imgClass[i].className}`).animate({width: "toggle"}, 400, "linear");
                $(`.${imgClass[++i].className}`).animate({width: "toggle", right: '0'}, 400, "linear", function() {
                    imgClass[i].style.right = 'initial';
                });
            } else {
                $(`.${imgClass[0].className}`).animate({width: "toggle", right: '0'}, 400, "linear", function() {
                    imgClass[0].style.right = 'initial';
                });
                $(`.${imgClass[i].className}`).animate({width: "toggle"}, 400, "linear");
            }
            break;
        }
    }

})

$('#btn-left').click(function() {
    restartTimer();
    for (let i = 0; i < imgClass.length; i++) {
        if (imgClass[i].style.display != "none") {
            if (i != 0) {
                $(`.${imgClass[i].className}`).animate({width: "toggle", right: '0'}, 400, "linear", function() {
                    imgClass[++i].style.right = 'initial';
                });
                $(`.${imgClass[--i].className}`).animate({width: "toggle"}, 400, "linear", function() {
                });
            }
            else {
                $(`.${imgClass[imgClass.length-1].className}`).animate({width: "toggle"}, 400, "linear");
                $(`.${imgClass[0].className}`).animate({width: "toggle", right: '0'}, 400, "linear", function() {
                    imgClass[0].style.right = 'initial';
                });
            }
            break;
        }
    }   
});