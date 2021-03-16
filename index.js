var imgClass = document.getElementById('parentsImg').getElementsByTagName('img');
var timer = setInterval(function() {
    $('#btn-right').click();
}, 4000);
var contJpg = [
    "media/egor-blintsov-morrslieb-rising.jpg",
    "media/egor-blintsov-night-harbor.jpg",
    "media/egor-blintsov-rox-to-eden.jpg",
    "media/egor-blintsov-witcher-2.jpg",
    "media/warShips.jpg",
    "media/bart-tchorzewski-2-painted.jpg"
]

$(document).ready(function () {
    for (let i = 0; i < imgClass.length; i++) 
        imgClass[i].classList.add(i);
        
    $(`.${imgClass[1].className}`).attr('src', `${contJpg[0]}`);
    $(`.${imgClass[0].className}`).attr('src', `${contJpg[contJpg.length-1]}`);
})

function restartTimer() {
    clearInterval(timer);
    timer = setInterval(function() {
        $('#btn-right').click();
    }, 4000);
}

$('#btn-right').click(function () {
    restartTimer();
    let temp = 0;
    $('.btn').prop("disabled", true);
    $('.right').css('transform', 'rotate(-10deg)');
    for (let i = 0; i < contJpg.length; i++) {
        if ($(`.${imgClass[1].className}`).attr("src") == contJpg[i]) {
            if (i == contJpg.length - 1) {
                $(`.${imgClass[1].className}`).css('margin-left', '-100%');
                $(`.${imgClass[2].className}`).attr('src', `${contJpg[temp]}`);
            } else {
                temp = i + 1;
                $(`.${imgClass[1].className}`).css('margin-left', '-100%');
                $(`.${imgClass[2].className}`).attr('src', `${contJpg[temp]}`);
            }
            break;
        }
    }
    setTimeout(function() {
        $('.right').css('transform', '')
    }, 100)

    setTimeout(function () {
        $(`.${imgClass[1].className}`).attr('src', `${contJpg[temp]}`);
        $(`.${imgClass[1].className}`).css({
            'display': 'none',
            'margin-left': '0%'
        });
        setTimeout(function() {
            $(`.${imgClass[1].className}`).css('display', '');
            $('.btn').prop("disabled", false);
        }, 100); 
    }, 1000);
})


$('#btn-left').click(function () {
    restartTimer();
    let temp = 0;
    $('.btn').prop("disabled", true);
    $('.left').css('transform', 'rotate(100deg)');
    for (let i = 0; i < contJpg.length; i++) {
        if ($(`.${imgClass[1].className}`).attr("src") == contJpg[i]) {
            if (i == 0) {
                temp = contJpg.length-1;
                $(`.${imgClass[0].className}`).attr('src', `${contJpg[temp]}`);
                $(`.${imgClass[0].className}`).css('margin-left', ``);
            } else {
                temp = i - 1;
                $(`.${imgClass[0].className}`).css('margin-left', '');
                $(`.${imgClass[0].className}`).attr('src', `${contJpg[temp]}`);
            }
            break;
        }
    }
    setTimeout(function() {
        $('.left').css('transform', '')
    }, 100)

    setTimeout(function () {
        $(`.${imgClass[1].className}`).attr('src', `${contJpg[temp]}`);
        $(`.${imgClass[0].className}`).css({
            'display': 'none',
            'margin-left': '-100%'
        });
        setTimeout(function() {
            $(`.${imgClass[0].className}`).css('display', '');
            $('.btn').prop("disabled", false);
        }, 100); 
    }, 1000);
})