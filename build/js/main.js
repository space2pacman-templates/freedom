$(document).ready(function(){$(".js-events-carousel").owlCarousel({items:1,dots:!0,responsiveClass:!0,responsive:{768:{items:2},1400:{items:3}}}),$(".js-gallery-carousel").owlCarousel({items:1,dots:!0,merge:!0,responsiveClass:!0,responsive:{768:{items:3,mergeFit:!0},1400:{items:6}}}),$(".js-reviews-carousel").owlCarousel({items:1,dots:!0,nav:!1,navText:"",responsiveClass:!0,responsive:{1e3:{nav:!0}}}),$(".js-sports-carousel").owlCarousel({items:1,dots:!0,responsiveClass:!0,responsive:{768:{items:3},1400:{items:5}}}),$(document).ready(function(){$(document).scroll(function(){$(this).scrollTop()>$("body").position().top?($(".header__menu").fadeIn().css({position:"fixed",top:"0"}),$(".header__menu").addClass("header__menu-bg")):($(".header__menu").css({position:"absolute"}),$(".header__menu").removeClass("header__menu-bg"))})}),$(".cross").hide(),$(".header__menu-mobile").hide(),$(".hamburger").click(function(){$(".header__menu-mobile").slideToggle("slow",function(){$(".hamburger").hide(),$(".cross").show(),$("body").addClass("no-scroll")})}),$(".cross").click(function(){$(".header__menu-mobile").slideToggle("slow",function(){$(".cross").hide(),$(".hamburger").show(),$("body").removeClass("no-scroll")})})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvd2xDYXJvdXNlbCIsIml0ZW1zIiwiZG90cyIsInJlc3BvbnNpdmVDbGFzcyIsInJlc3BvbnNpdmUiLCI3NjgiLCIxNDAwIiwibWVyZ2UiLCJtZXJnZUZpdCIsIm5hdiIsIm5hdlRleHQiLCIxMDAwIiwic2Nyb2xsIiwidGhpcyIsInNjcm9sbFRvcCIsInBvc2l0aW9uIiwidG9wIiwiZmFkZUluIiwiY3NzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhpZGUiLCJjbGljayIsInNsaWRlVG9nZ2xlIiwic2hvdyJdLCJtYXBwaW5ncyI6IkFBQ0FBLEVBQUVDLFVBQVVDLE1BQU0sV0FDbEJGLEVBQUUsdUJBQXVCRyxhQUNyQkMsTUFBTyxFQUNQQyxNQUFNLEVBQ05DLGlCQUFpQixFQUNqQkMsWUFDSUMsS0FDSUosTUFBTyxHQUVYSyxNQUNJTCxNQUFPLE1BS25CSixFQUFFLHdCQUF3QkcsYUFDdEJDLE1BQU8sRUFDUEMsTUFBTSxFQUNOSyxPQUFPLEVBQ1BKLGlCQUFpQixFQUNqQkMsWUFDSUMsS0FDSUosTUFBTyxFQUNQTyxVQUFVLEdBRWRGLE1BQ0lMLE1BQU8sTUFJbkJKLEVBQUUsd0JBQXdCRyxhQUN0QkMsTUFBTyxFQUNQQyxNQUFNLEVBQ05PLEtBQUssRUFDTEMsUUFBUyxHQUNUUCxpQkFBaUIsRUFDakJDLFlBQ0lPLEtBQ0lGLEtBQUssTUFJakJaLEVBQUUsdUJBQXVCRyxhQUNyQkMsTUFBTyxFQUNQQyxNQUFNLEVBQ05DLGlCQUFpQixFQUNqQkMsWUFDSUMsS0FDSUosTUFBTyxHQUVYSyxNQUNJTCxNQUFPLE1BSW5CSixFQUFFQyxVQUFVQyxNQUFNLFdBQ2RGLEVBQUVDLFVBQVVjLE9BQU8sV0FDUGYsRUFBRWdCLE1BQU1DLFlBQ1JqQixFQUFFLFFBQVFrQixXQUNSQyxLQUNObkIsRUFBRSxpQkFBaUJvQixTQUFTQyxLQUFLSCxTQUFXLFFBQVFDLElBQU0sTUFDMURuQixFQUFFLGlCQUFpQnNCLFNBQVMscUJBRTVCdEIsRUFBRSxpQkFBaUJxQixLQUFLSCxTQUFhLGFBQ3JDbEIsRUFBRSxpQkFBaUJ1QixZQUFZLHdCQUkzQ3ZCLEVBQUUsVUFBVXdCLE9BQ1p4QixFQUFFLHdCQUF3QndCLE9BQzFCeEIsRUFBRSxjQUFjeUIsTUFBTSxXQUNsQnpCLEVBQUUsd0JBQXdCMEIsWUFBWSxPQUFRLFdBQzFDMUIsRUFBRSxjQUFjd0IsT0FDaEJ4QixFQUFFLFVBQVUyQixPQUNaM0IsRUFBRSxRQUFRc0IsU0FBUyxpQkFJM0J0QixFQUFFLFVBQVV5QixNQUFNLFdBQ2R6QixFQUFFLHdCQUF3QjBCLFlBQVksT0FBUSxXQUMxQzFCLEVBQUUsVUFBVXdCLE9BQ1p4QixFQUFFLGNBQWMyQixPQUNoQjNCLEVBQUUsUUFBUXVCLFlBQVkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vcGFydGlhbHNcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuJCgnLmpzLWV2ZW50cy1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmVDbGFzczogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxNDAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4kKCcuanMtZ2FsbGVyeS1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIG1lcmdlOiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZUNsYXNzOiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgbWVyZ2VGaXQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIDE0MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDYsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuJCgnLmpzLXJldmlld3MtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICBpdGVtczogMSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgbmF2VGV4dDogXCJcIixcclxuICAgIHJlc3BvbnNpdmVDbGFzczogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAxMDAwOiB7XHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiQoJy5qcy1zcG9ydHMtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICBpdGVtczogMSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICByZXNwb25zaXZlQ2xhc3M6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTQwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHsgXHJcbiAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24gKCkgeyBcclxuICAgICAgICB2YXIgeSA9ICQodGhpcykuc2Nyb2xsVG9wKCk7IFxyXG4gICAgICAgIHZhciB4ID0gJChcImJvZHlcIikucG9zaXRpb24oKTsgXHJcbiAgICAgICAgaWYgKHkgPiB4LnRvcCkgeyBcclxuICAgICAgICAgICAgJCgnLmhlYWRlcl9fbWVudScpLmZhZGVJbigpLmNzcyh7XCJwb3NpdGlvblwiOlwiZml4ZWRcIixcInRvcFwiOlwiMFwifSk7XHJcbiAgICAgICAgICAgICQoJy5oZWFkZXJfX21lbnUnKS5hZGRDbGFzcyhcImhlYWRlcl9fbWVudS1iZ1wiKTtcclxuICAgICAgICB9IGVsc2UgeyBcclxuICAgICAgICAgICAgJCgnLmhlYWRlcl9fbWVudScpLmNzcyh7XCJwb3NpdGlvblwiIDogXCJhYnNvbHV0ZVwifSk7IFxyXG4gICAgICAgICAgICAkKCcuaGVhZGVyX19tZW51JykucmVtb3ZlQ2xhc3MoXCJoZWFkZXJfX21lbnUtYmdcIik7XHJcbiAgICAgICAgfSBcclxuICAgIH0pO1x0XHJcbn0pO1xyXG4kKFwiLmNyb3NzXCIpLmhpZGUoKTtcclxuJChcIi5oZWFkZXJfX21lbnUtbW9iaWxlXCIpLmhpZGUoKTtcclxuJChcIi5oYW1idXJnZXJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5oZWFkZXJfX21lbnUtbW9iaWxlXCIpLnNsaWRlVG9nZ2xlKFwic2xvd1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5oYW1idXJnZXJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuY3Jvc3NcIikuc2hvdygpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbm8tc2Nyb2xsJyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKFwiLmNyb3NzXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIuaGVhZGVyX19tZW51LW1vYmlsZVwiKS5zbGlkZVRvZ2dsZShcInNsb3dcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuY3Jvc3NcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIuaGFtYnVyZ2VyXCIpLnNob3coKTtcclxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG59KTsiXX0=
