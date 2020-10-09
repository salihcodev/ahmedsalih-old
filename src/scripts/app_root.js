$(document).ready(function() {
    "use strict";

    //=>  MANAGE AREAS 'make it like SPA app'
    $("aside .navigators ul li").on("click", function() {
        //  to close the side bar after selecting the chosen section
        $("aside").toggleClass("left", "-290px")
        $("#" + $(this).data("target")).fadeIn(700).siblings().fadeOut(600);
        $(this).addClass("selected_in_aside").siblings().removeClass("selected_in_aside");

        $("aside").addClass("toggle_aside")

        // Adjust toggler bars.
        $("span.bar.bar_one").addClass("bar_one_edit");

        $("span.bar.bar_two").addClass("bar_two_edit");

        $("span.bar.bar_three").addClass("bar_three_edit");

        $("span.bar.bar_four").addClass("bar_four_edit");
    });
    //=>>>>>>>>>>>>>>>>>>

    //=>  DIRECTION TO CONTACT ME AREA AND ABOUT ME.
    $(".gallery_attractor").on("click", function() {
        $(".area").fadeOut()
        $("#contact_me").fadeIn()
        // Add the active style class to active li.
        $("aside .navigators ul li.contact").addClass("selected_in_aside").siblings().removeClass("selected_in_aside");
    });


    $(".hire_me").on("click", function() {
        $(".area").fadeOut()
        $("#contact_me").fadeIn()
    });
    //=>>>>>>>>>>>>>>>>>>

    $(".area").on("click", function () {
        // toggle aside.
        $("aside").addClass("toggle_aside")

        // Adjust toggler bars.
        $("span.bar.bar_one").addClass("bar_one_edit");

        $("span.bar.bar_two").addClass("bar_two_edit");

        $("span.bar.bar_three").addClass("bar_three_edit");

        $("span.bar.bar_four").addClass("bar_four_edit");        
    })


    //=>  HANDLING THE SIDEBAR
    $("aside").css("top", $('nav').outerHeight())

    $("nav .aside_handler").on("click", function() {
        // toggle aside.
        $("aside").toggleClass("toggle_aside")

        // Adjust toggler bars.
        $("span.bar.bar_one").toggleClass("bar_one_edit");

        $("span.bar.bar_two").toggleClass("bar_two_edit");

        $("span.bar.bar_three").toggleClass("bar_three_edit");

        $("span.bar.bar_four").toggleClass("bar_four_edit");
    });

    $(document).on("keydown", function(ev) {
        if (ev.keyCode == "27") {
            // toggle aside.
            $("aside").addClass("toggle_aside")

            // Adjust toggler bars.
            $("span.bar.bar_one").addClass("bar_one_edit");

            $("span.bar.bar_two").addClass("bar_two_edit");
    
            $("span.bar.bar_three").addClass("bar_three_edit");
    
            $("span.bar.bar_four").addClass("bar_four_edit");
        }
    })
    //=>>>>>>>>>>>>>>>>>>

    //=>  ADD FLAG TO ACTIVE LIST IN SIDEBAR
    $("aside .info ul li").on("click", function() {
        $(this).addClass("select_area_effect").siblings().removeClass("select_area_effect");
    });
    //=>>>>>>>>>>>>>>>>>>

    //=>  CASCADING SIDEBAR
    $(window).on("scroll", function() {
        if ($(this).scrollTop() >= $("nav").outerHeight()) {
            $("nav").css("opacity", "0.9");
        } else {
            $("nav").css("opacity", "1");
        }
    });
    //=>>>>>>>>>>>>>>>>>>

    //=>  SKILLS BOXES IS UNDER CONTROL
    $(".s_box").on("click", function() {
        $("#" + $(this).data("go")).fadeIn(100).siblings().fadeOut(120);
        $(".skills_popup_viewer").css("display", "block");
    });

    $(document).on("keydown", function(ev) {
        if (ev.keyCode == "27") {
        $(".skills_popup_viewer").css("display", "none");
        }
    })

    $(".skills_popup_closer").on("click", function() {
        $(".skills_popup_viewer").css("display", "none");
    });
    //=>>>>>>>>>>>>>>>>>>

    //=>  HANDLING FEEDBACKS POPUP
    $(".feedbacks .testi_holder h1").on("click",function() {
        $(".testi_popup_viewer").css("display", "block");     
    });

    $(".testi_popup_closer").on("click", function() {
        $(".testi_popup_viewer").css("display", "none");
    });

    $(document).on("keydown", function(ev) {
        if (ev.keyCode == "27") {
            $(".testi_popup_viewer").css("display", "none");
        }
    })
    //=>>>>>>>>>>>>>>>>>>

    //=>  ANIMATE CONTACT ME INPUTS
$(".f_name input").on("focus blur", function() {
    $(".input_1_flag")
    .toggleClass("animate_input_flag");
})

$(".l_name input").on("focus blur", function() {
    $(".input_2_flag")
    .toggleClass("animate_input_flag");
})

$(".email input").on("focus blur", function() {
    $(".input_3_flag")
    .toggleClass("animate_input_flag");
})

$(".message textarea").on("focus blur", function() {
    $(".input_4_flag")
    .toggleClass("animate_input_flag");
})
    //  toggle input's flage "icon"
$(".input_flag i").css("display", "none");
//=>>>>>>>>>>>>>>>>>>

    //=>  HANDLING LOADER
    $(window).on("load", function() {
        $(".loader_container").fadeOut(1);
        $("body").css("overflow", "auto");
    });
//=>>>>>>>>>>>>>>>>>>
});