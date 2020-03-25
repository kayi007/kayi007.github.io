// $("#pressButton").on("click", function (event) {
//     event.preventDefault();
// });
$(function () {
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).outerHeight();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('a.go-to-top').fadeIn();
        } else {
            $('a.go-to-top').fadeOut();
        }

        if ($(this).scrollTop() > 600) {
            $('#mainNav').css('background-color', 'red');
            $("#mainNav").css('background-image', 'linear-gradient(to bottom right, #ff8870, #ff7987)');
        } else {
            $('#mainNav').css('background-color', 'transparent');
            $('#mainNav').css('background-image', 'none');
            $('#mainNav').removeClass('nav-shrink');
        }

        if ($(this).scrollTop() > 650) {
            $('#mainNav').addClass('nav-shrink');
        }

        $('#services .animated').each(function () {
            if (isScrolledIntoView(this) === true) {
                $(this).css('opacity', '1');
                $(this).addClass('fadeInUp');
            }
            // else{
            //     $(this).css('opacity', '0');
            //     $(this).removeClass('fadeInUp');
            // }
        });

        $('#profilePic .animated').each(function(){
            if (isScrolledIntoView(this) === true) {
                $(this).css('opacity', '1');
                $(this).addClass('slideInLeft');
            }
        });

        $('#descrip .animated').each(function(){
            if (isScrolledIntoView(this) === true) {
                $(this).css('opacity', '1');
                $(this).addClass('fadeInRight');
            }
        });

    });
    $('a.go-to-top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

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
        setTimeout(function () { }, 800);

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

