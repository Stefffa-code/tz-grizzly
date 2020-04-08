// Mobile menu
if ($("#hamburg").length){
    $('#hamburg').click(function(){
        $(this).toggleClass('open');
        $('#navbar').toggleClass('open');
        $('body').toggleClass('locked');
    })
}

// modal window
(function () {
    if($("#consultation").length){
        $('#consultation').click(function(){
            $('#consultation-modal').addClass('open');
            $('body').addClass('locked');
        });
    }
    if($("#modal_close").length){
        $('#modal_close').click(function(){
            $('#consultation-modal').removeClass('open');
            $('body').removeClass('locked');
        })
    }
}());


// crop text
(function () {

    var size = 120,
    newsContent= $('.crop-text'),
    newsText = newsContent.text();
    
    if(newsText.length > size){
        newsContent.text(newsText.slice(0, size) + '...');
    }
}());


// tabs
if($(".tabgroup").length){
    $('.tabgroup > div').hide();
    $('.tabgroup > div:last-of-type').show();
    $('.tabs_button li').click(function(e){
    e.preventDefault();
        var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs_button').data('tabgroup'),
            others = $this.siblings('li'),
            target = $this.children('a').attr('href');

        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
    })
}

// slick-carousel
if ($(".catalog__slider").length){
    $(".catalog__slider").slick({

        dots: true,
        speed: 500,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,

        responsive: [
            {   
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }   
            },
            {
                breakpoint: 700,
                settings: {
                slidesToShow: 1,
                dots: true
                }
            }
        ]
    })
}

if ($("#files-slider").length){
    $("#files-slider").slick({

        dots: true,
        speed: 500,
        cssEase: 'linear',
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,

        responsive: [
            {   
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }   
            },
        ]
    });
}

if ($("#about_slider").length){
    $("#about_slider").slick({

        dots: true,
        speed: 500,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,

    });
}