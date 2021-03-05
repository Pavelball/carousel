let imgClass = document.getElementsByClassName('img');

$(document).ready(function() {
    imgClass[0].classList.add(0);
    imgClass[0].style.zIndex = '10';
    for (let i = 1; i < imgClass.length; i++) {
        imgClass[i].style.zIndex = '0';
        imgClass[i].classList.add(i);
        $("."+`${imgClass[i].classList[1]}`).slideToggle();
    }
})

$('#btn-right').click(function() {
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
                /*i < imgClass.length-1 ? imgClass[++i].style.zIndex = '10' : imgClass[0].style.zIndex = '10';*/
            }
            /*$( "div" ).slideToggle();*/
        }
        $("."+`${imgClass[temp].classList[1]}`).toggle("slow", "linear");
    }
)

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
}