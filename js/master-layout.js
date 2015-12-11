$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    })
    //loginPageLayoutJS();
    $(window).resize(function() {
      // loginPageLayoutJS();
    });
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 100) {
    //         $('.scrollup').fadeIn();
    //     } else {
    //         $('.scrollup').fadeOut();
    //     }
    // });
});


function loginPageLayoutJS() {
    var windowHeight = $(window).height();
        $('.full-bg').css('min-height', windowHeight);

    var loginBoxHeight = $('.login-box').outerHeight();
        $('.login-box-wrap').css('height', loginBoxHeight);

    var loginWrapHeight = $('.login-box-wrap').outerHeight();
        loginWrapTop = $('.login-box-wrap').offset().top;

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
