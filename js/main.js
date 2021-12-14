var clock;
    $(document).ready(function() {
        var clock;

        clock = $('.clock').FlipClock({
            clockFace: 'DailyCounter',
            autoStart: false,
            callbacks: {
                stop: function() {
                    $('.message').html('The clock has stopped!')
                }
            }
        });
                
        clock.setTime(3220880);
        clock.setCountdown(true);
        clock.start();

});
$(window).scroll(function () {
    if ($(this).scrollTop() > 15) {
        $('.header_wraper').addClass("sticky_nav");
    } else {
        $('.header_wraper').removeClass("sticky_nav");
    }
});
$(".btn_primary_cryto").click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
});
$('.roadmap_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
    ]
});
$(".slick-next").text("");
$(".slick-next").addClass("ti-angle-right");
$(".slick-prev").text("");
$(".slick-prev").addClass("ti-angle-left");

$('nav.body_left_social').midnight();

$('[data-toggle="tooltip"]').tooltip();

$(".first_demo").click(function(){
    $(".demo_wrapper").fadeToggle(200)
});
$(".demo_close").on("click",function(){
    $(".demo_wrapper").fadeToggle(200)
});
setTimeout(function() {
    var time = "Just Now";
    $.notify({
        icon: 'img/user-1.png',
        title: 'Fariya Mim From Bangladesh',
        message: 'Recently purchased <span class="blue">2500 CIC</span> tokens'
    },{
        type: 'minimalist',
        placement: {
            from: "bottom",
            align: "left"
        },
        animate: {
            enter: 'animated fadeInLeftBig',
            exit: 'animated fadeOutLeftBig'
        },
        icon_type: 'image',
        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<div id="image">' +
            '<img data-notify="icon" class="rounded-circle float-left">' +
            '</div><div id="text">' +
            '<span data-notify="title">{1}</span>' +
            '<span data-notify="message">{2}</span>' +
            '<span data-notify="time">'+time+'</span>' +
            '</div>'+
        '</div>'
    });
}, 5000);
setTimeout(function() {
    var time = "30 seconds ago";
    $.notify({
        icon: 'img/user-11.png',
        title: 'Siam Ahnaf From Bangladesh',
        message: 'Recently purchased <span class="blue">1850 CIC</span> tokens'
    },{
        type: 'minimalist',
        placement: {
            from: "bottom",
            align: "left"
        },
        animate: {
            enter: 'animated fadeInLeftBig',
            exit: 'animated fadeOutLeftBig'
        },
        icon_type: 'image',
        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<div id="image">' +
            '<img data-notify="icon" class="rounded-circle float-left">' +
            '</div><div id="text">' +
            '<span data-notify="title">{1}</span>' +
            '<span data-notify="message">{2}</span>' +
            '<span data-notify="time">'+time+'</span>' +
            '</div>'+
        '</div>'
    });
}, 15000);
setTimeout(function() {
    var time = "30 Minutes ago";
    $.notify({
        icon: 'img/user-7.png',
        title: 'Tinni From Bangladesh',
        message: 'Recently meet with <span class="blue">Siam Ahnaf</span> to buy'
    },{
        type: 'minimalist',
        placement: {
            from: "bottom",
            align: "left"
        },
        animate: {
            enter: 'animated fadeInLeftBig',
            exit: 'animated fadeOutLeftBig'
        },
        icon_type: 'image',
        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close noti_close" data-notify="dismiss">×</button>' +
            '<div id="image">' +
            '<img data-notify="icon" class="rounded-circle float-left">' +
            '</div><div id="text">' +
            '<span data-notify="title">{1}</span>' +
            '<span data-notify="message">{2}</span>' +
            '<span data-notify="time">'+time+'</span>' +
            '</div>'+
        '</div>'
    });
},25000);
setTimeout(function() {
    var time = "5 Minutes ago";
    $.notify({
        icon: 'img/user-9.png',
        title: 'Shifat From Bangladesh',
        message: 'Recently buy <span class="blue">40 VIP</span> tokens'
    },{
        type: 'minimalist',
        placement: {
            from: "bottom",
            align: "left"
        },
        animate: {
            enter: 'animated fadeInLeftBig',
            exit: 'animated fadeOutLeftBig'
        },
        icon_type: 'image',
        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close noti_close" data-notify="dismiss">×</button>' +
            '<div id="image">' +
            '<img data-notify="icon" class="rounded-circle float-left">' +
            '</div><div id="text">' +
            '<span data-notify="title">{1}</span>' +
            '<span data-notify="message">{2}</span>' +
            '<span data-notify="time">'+time+'</span>' +
            '</div>'+
        '</div>'
    });
}, 35000);
setTimeout(function() {
    var time = "10 Minuttes ago";
    $.notify({
        icon: 'img/user-6.png',
        title: 'Kate Pele From Canada',
        message: 'Recently meet with <span class="blue">Siam Ahnaf</span> to buy'
    },{
        type: 'minimalist',
        placement: {
            from: "bottom",
            align: "left"
        },
        animate: {
            enter: 'animated fadeInLeftBig',
            exit: 'animated fadeOutLeftBig'
        },
        icon_type: 'image',
        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close noti_close" data-notify="dismiss">×</button>' +
            '<div id="image">' +
            '<img data-notify="icon" class="rounded-circle float-left">' +
            '</div><div id="text">' +
            '<span data-notify="title">{1}</span>' +
            '<span data-notify="message">{2}</span>' +
            '<span data-notify="time">'+time+'</span>' +
            '</div>'+
        '</div>'
    });
}, 45000);
setTimeout(function() {
    var time = "15 seconds ago";
    $.notify({
        icon: 'img/user-10.png',
        title: 'Siam Ahanf From Bangladesh',
        message: 'Recently meet with <span class="blue">Fariya Mim</span>'
    },{
        type: 'minimalist',
        placement: {
            from: "bottom",
            align: "left"
        },
        animate: {
            enter: 'animated fadeInLeftBig',
            exit: 'animated fadeOutLeftBig'
        },
        icon_type: 'image',
        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close noti_close" data-notify="dismiss">×</button>' +
            '<div id="image">' +
            '<img data-notify="icon" class="rounded-circle float-left">' +
            '</div><div id="text">' +
            '<span data-notify="title">{1}</span>' +
            '<span data-notify="message">{2}</span>' +
            '<span data-notify="time">'+time+'</span>' +
            '</div>'+
        '</div>'
    });
}, 55000);

window.purechatApi = { l: [], t: [], on: function () { this.l.push(arguments); } }; (function () { var done = false; var script = document.createElement('script'); script.async = true; script.type = 'text/javascript'; script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript'; document.getElementsByTagName('HEAD').item(0).appendChild(script); script.onreadystatechange = script.onload = function (e) { if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { var w = new PCWidget({c: '91e29692-c91a-4bd1-bbab-b95018fe5577', f: true }); done = true; } }; })();

$(window).on('load',function(){
    setTimeout(function(){
        $('.loaading_screen_main').addClass('loades_com')
    },300)
})

new WOW().init();
var scrollWidth= window.innerWidth-$(document).width();
$('.modal').on('show.bs.modal', function () {
    $('.header_wraper, .demo').css("padding-right", scrollWidth);
});
$('.modal').on('hidden.bs.modal', function () {
    $('.header_wraper, .demo').css("padding-right", "unset");
});
$('.mobile_bar').click(function(){
    $('.nav_links').slideToggle();
})