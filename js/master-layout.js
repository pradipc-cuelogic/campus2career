$(document).ready(function() {
    notificationToggle();
    //________________________________Bootsrap Tooltip________________________________
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    //________________________________Before Login Layout________________________________ 
    loginPageLayoutJS();
    $(window).resize(function() {
        loginPageLayoutJS();
    });

    //________________________________Scroll Up________________________________ 
    scrollToTop();

    //________________________________Bootstrap Corousel________________________________
    $('.notification .carousel').carousel({
        interval: 5000
    });

    //________________________________BEGIN Slimscroller ________________________________       
    $('.scroller').each(function() {
        $(this).slimScroll({
            size: '4px',
            color: '#ccc',
            height: $(this).attr("data-height"),
            alwaysVisible: ($(this).attr("data-always-visible") == "1" ? true : false),
            railVisible: ($(this).attr("data-rail-visible") == "1" ? true : false),
            disableFadeOut: true
        });
    });
});


//****************************************FUNCTIONS*********************************************
//________________________________Before Login Layout________________________________ 
function loginPageLayoutJS() {
    var windowHeight = $(window).height();
    $('.full-bg').css('min-height', windowHeight);

    var loginBoxHeight = $('.login-box').outerHeight();
    $('.login-box-wrap').css('height', loginBoxHeight);


    var loginWrapHeight = $('.login-box-wrap').outerHeight();
    var loginWrapObj = $('.login-box-wrap');
    if (loginWrapObj.length) {
        var loginWrapTop = loginWrapObj.offset().top;
    }

    $('.more-links').css('top', loginWrapHeight + loginWrapTop);

    $(".custom-select").each(function() {
        $(this).wrap("<span class='select-wrapper'></span>");
        $(this).after("<span class='holder'></span>");
    });
    $(".custom-select").change(function() {
        var selectedOption = $(this).find(":selected").text();
        $(this).next(".holder").text(selectedOption);
    }).trigger('change');
}


//________________________________Scroll Up________________________________ 
function scrollToTop() {
    //Check to see if the window is top if not then display scrollup button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollup').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
}


function notificationToggle() {

    $('.bell-toggle').on('click',function() {
        if($('.notifications-slide').css('left')=='0px'){
            $('.notifications-slide').animate({left: 292}, 500);        
        }else{
            $('.notifications-slide').animate({left: 0}, 500); 
        }
    });
}

function setLayout() {
    $('[data-toggle="tooltip"]').tooltip();
    loginPageLayoutJS();
}