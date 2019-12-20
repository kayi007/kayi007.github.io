$("#pressButton").on("click", function (event) {
    event.preventDefault();
});
$(function () {
    $('.carousel-item').eq(0).addClass('active');
    var total = $('.carousel-item').length;
    var current = 0;
    $('#moveRight').on('click', function () {
        var next = current;
        current = current + 1;
        setSlide(next, current);
    });
    $('#moveLeft').on('click', function () {
        var prev = current;
        current = current - 1;
        setSlide(prev, current);
    });
    function setSlide(prev, next) {
        var slide = current;
        if (next > total - 1) {
            slide = 0;
            current = 0;
        }
        if (next < 0) {
            slide = total - 1;
            current = total - 1;
        }
        $('.carousel-item').eq(prev).removeClass('active');
        $('.carousel-item').eq(slide).addClass('active');
        setTimeout(function () {}, 800);

        console.log('current ' + current);
        console.log('prev ' + prev);
    }
});

// $(document).ready(function(){
//     var myVar;
    
//     function myFunction() {
//         myVar = setTimeout(showPage, 3000);
//     }
    
//     function showPage() {
//         document.getElementById("loader").style.display = "none";
//         document.getElementById("myDiv").style.display = "block";
//     }
// });

