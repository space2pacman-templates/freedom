!function(i){i(function(){i(".rf").each(function(){function e(){t.find(".rfield").each(function(){""!=i(this).val()?i(this).removeClass("empty_field"):i(this).addClass("empty_field")})}function s(){t.find(".empty_field").css({"border-color":"#d8512d",transition:"all, .25s"}),setTimeout(function(){t.find(".empty_field").removeAttr("style")},500)}var t=i(this),d=t.find(".btn_submit");t.find(".rfield").addClass("empty_field"),setInterval(function(){if(e(),t.find(".empty_field").length>0){if(d.hasClass("disabled"))return!1;d.addClass("disabled")}else d.removeClass("disabled")},500),d.click(function(){if(i(this).hasClass("disabled"))return s(),!1;t.submit()})})})}(jQuery);