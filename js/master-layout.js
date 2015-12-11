$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    })
    loginPageLayoutJS();
    $(window).resize(function() {
       loginPageLayoutJS();
    });
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 100) {
    //         $('.scrollup').fadeIn();
    //     } else {
    //         $('.scrollup').fadeOut();
    //     }
    // });

//***********************************BEGIN Slimscroller *****************************       
    $('.scroller').each(function () {
        $(this).slimScroll({
                size: '3px',
                color: '#e9e0d6',
                height: $(this).attr("data-height"),
                alwaysVisible: ($(this).attr("data-always-visible") == "1" ? true : false),
                railVisible: ($(this).attr("data-rail-visible") == "1" ? true : false),
                disableFadeOut: true
        });
    });
//***********************************END Slimscroller ***************************** 
});

function loginPageLayoutJS() {
    var windowHeight = $(window).height();
        $('.full-bg').css('min-height', windowHeight);

    var loginBoxHeight = $('.login-box').outerHeight();
        $('.login-box-wrap').css('height', loginBoxHeight);

        
    var loginWrapHeight = $('.login-box-wrap').outerHeight();
    var loginWrapObj = $('.login-box-wrap');    
        if(loginWrapObj.length){
            var loginWrapTop = loginWrapObj.offset().top;
        }

        $('.more-links').css('top', loginWrapHeight + loginWrapTop);

        $(".custom-select").each(function(){
            $(this).wrap( "<span class='select-wrapper'></span>" );
            $(this).after("<span class='holder'></span>");
        });
        $(".custom-select").change(function(){
            var selectedOption = $(this).find(":selected").text();
            $(this).next(".holder").text(selectedOption);
        }).trigger('change');

}
