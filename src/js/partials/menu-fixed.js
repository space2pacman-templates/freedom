$(document).ready(function() { 
    $(document).scroll(function () { 
        var y = $(this).scrollTop(); 
        var x = $("body").position(); 
        if (y > x.top) { 
            $('.header__menu').fadeIn().css({"position":"fixed","top":"0"});
            $('.header__menu').addClass("header__menu-bg");
        } else { 
            $('.header__menu').css({"position" : "absolute"}); 
            $('.header__menu').removeClass("header__menu-bg");
        } 
    });	
});