$(".cross").hide();
$(".header__menu-mobile").hide();
$(".hamburger").click(function () {
    $(".header__menu-mobile").slideToggle("slow", function () {
        $(".hamburger").hide();
        $(".cross").show();
        $('body').addClass('no-scroll');
    });
});

$(".cross").click(function () {
    $(".header__menu-mobile").slideToggle("slow", function () {
        $(".cross").hide();
        $(".hamburger").show();
        $('body').removeClass('no-scroll');
    });
});