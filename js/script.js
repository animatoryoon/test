$(".submenu").hide();

$("#gnb").mouseenter(function () {
    $(".submenu").stop().slideDown()
});

$("header").mouseleave(function () {
    $(".submenu").stop().slideUp()
});

$(".sub_po").hide();
$(".about").show();
$(".link_about").mouseenter(function () {
    $(".about").show().siblings(".sub_po").hide();
});
$(".link_menu").mouseenter(function () {
    $(".menu").show().siblings(".sub_po").hide();
});
$(".link_prom").mouseenter(function () {
    $(".promotion").show().siblings(".sub_po").hide();
});
$(".link_cont").mouseenter(function () {
    $(".contact").show().siblings(".sub_po").hide();
});


$("ul.link_about").mouseenter(function () {
    $(this).parent().parent().siblings().children().children(".gnb_wrap").children().children(".link_about").children().addClass("in").parent().siblings().children().removeClass("in")

});
$("ul.link_menu").mouseenter(function () {
    $(this).parent().parent().siblings().children().children(".gnb_wrap").children().children(".link_menu").children().addClass("in").parent().siblings().children().removeClass("in")
});
$("ul.link_prom").mouseenter(function () {
    $(this).parent().parent().siblings().children().children(".gnb_wrap").children().children(".link_prom").children().addClass("in").parent().siblings().children().removeClass("in")
});
$("ul.link_cont").mouseenter(function () {
    $(this).parent().parent().siblings().children().children(".gnb_wrap").children().children(".link_cont").children().addClass("in").parent().siblings().children().removeClass("in")
});

$(".submenu").mouseleave(function () {
    $(this).siblings().children().children(".gnb_wrap").children().children().children().removeClass("in")

});
$('.btn1').click(function () {
    $('body,html').animate({
        scrollTop: 2000
    }, 500)
});
$('.btn2').click(function () {
    $('body,html').animate({
        scrollTop: 2000
    }, 500)
});
$('.btn3').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1000)
});
$('.btn4').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1000)
});

$(function () {
    $(".content").hide();
    $(".con1").show();
    $("#button1").click(function () {
        $(this).addClass("on").parent().siblings().children().removeClass("on");
        $(".con1").fadeIn().siblings(".content").fadeOut();
    });
    $("#button2").click(function () {
        $(this).addClass("on").parent().siblings().children().removeClass("on");
        $(".con2").fadeIn().siblings(".content").fadeOut();
    });
    $("#button3").click(function () {
        $(this).addClass("on").parent().siblings().children().removeClass("on");
        $(".con3").fadeIn().siblings(".content").fadeOut();
    });
    $("#button4").click(function () {
        $(this).addClass("on").parent().siblings().children().removeClass("on");
        $(".con4").fadeIn().siblings(".content").fadeOut();
    });
    $("#button5").click(function () {
        $(this).addClass("on").parent().siblings().children().removeClass("on");
        $(".con5").fadeIn().siblings(".content").fadeOut();
    });
    $("#button6").click(function () {
        $(this).addClass("on").parent().siblings().children().removeClass("on");
        $(".con6").fadeIn().siblings(".content").fadeOut();
    });
    $("#button7").click(function () {
        $(this).addClass("on").parent().siblings().children().removeClass("on");
        $(".con7").fadeIn().siblings(".content").fadeOut();
    });
});


$(function () {

    $(".right> li> .font0").click(function () {
        $(this).next().slideToggle();
        $(this).parent().siblings().children(".text_info").slideUp();
    });

    $(".right> li> .font1").click(function () {
        $(this).next().slideToggle();
        $(this).parent().siblings().children(".text_info").slideUp();
    });
    $(".right> li> .font2").click(function () {
        $(this).next().slideToggle();
        $(this).parent().siblings().children(".text_info").slideUp();
    });
    $(".right> li> .font3").click(function () {
        $(this).next().slideToggle();
        $(this).parent().siblings().children(".text_info").slideUp();
    });
    $(".right> li> .font4").click(function () {
        $(this).next().slideToggle();
        $(this).parent().siblings().children(".text_info").slideUp();
    });
    $(".right> li> .font5").click(function () {
        $(this).next().slideToggle();
        $(this).parent().siblings().children(".text_info").slideUp();
    });

});

$(function () {
    $(".right> li> ul").click(function () {
        $(this).children(".plus").children("img").toggleClass("turn");
    });
});

