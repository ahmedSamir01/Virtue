/*global console, $*/

$(function () {
    
    "use strict";
    
    // trigger wow.js
    new WOW({mobile:!1}).init();
    
    $(".carousel").on("slide.bs.carousel", function () {
        touch: false;
    });

    
    var maxSmall = window.matchMedia("(max-width: 767px)");
    var minMed = window.matchMedia("(min-width: 768px)");
    
    // dark-logo check
    if (maxSmall.matches) {
        
        $(".navbar nav").removeClass("navbar-dark");
        $(".navbar nav").addClass("navbar-light"); 
        
    } else {
        
        $(".navbar nav").removeClass("navbar-light");
        $(".navbar nav").addClass("navbar-dark");         
    }
    
    // nav-top check
    if (minMed.matches) {
        
        if ($(window).scrollTop() > 30) {

            $("div.navbar").addClass("nav-top");
            $(".navbar nav").removeClass("navbar-dark");
            $(".navbar nav").addClass("navbar-light");
            $(".navbar img").attr("src", "imgs/logo-dark.svg");

        } else {

            $("div.navbar").removeClass("nav-top");
            $(".navbar nav").removeClass("navbar-light");
            $(".navbar nav").addClass("navbar-dark");
            $(".navbar img").attr("src", "imgs/logo.svg");

        }
    }
    
    
    
    $(window).resize(function () {
        
        if (maxSmall.matches) {

            $(".navbar nav").removeClass("navbar-dark");
            $(".navbar nav").addClass("navbar-light"); 
        
        } else {
        
            $(".navbar nav").removeClass("navbar-light");
            $(".navbar nav").addClass("navbar-dark");         
        }
        
        if (minMed.matches) {
        
            if ($(window).scrollTop() > 30) {
                
                $("div.navbar").addClass("nav-top");
                $(".navbar nav").removeClass("navbar-dark");
                $(".navbar nav").addClass("navbar-light");
                $(".navbar img").attr("src", "imgs/logo-dark.svg");
                
            } else {
                
                $("div.navbar").removeClass("nav-top");
                $(".navbar nav").removeClass("navbar-light");
                $(".navbar nav").addClass("navbar-dark");
                $(".navbar img").attr("src", "imgs/logo.svg");
                
            } 
            
        } else {

            $(".navbar nav").removeClass("navbar-dark");
            $(".navbar nav").addClass("navbar-light");
            $(".navbar img").attr("src", "imgs/logo-dark.svg");
        }
    });
    
    $(window).scroll(function () {
       
        if (minMed.matches) {
        
            if ($(window).scrollTop() > 30) {
                
                $("div.navbar").addClass("nav-top");
                $(".navbar nav").removeClass("navbar-dark");
                $(".navbar nav").addClass("navbar-light");
                $(".navbar img").attr("src", "imgs/logo-dark.svg");
                
            } else {
                
                $("div.navbar").removeClass("nav-top");
                $(".navbar nav").removeClass("navbar-light");
                $(".navbar nav").addClass("navbar-dark");
                $(".navbar img").attr("src", "imgs/logo.svg");
                
            }
        
        }
        
    });
        
    $(".collapse").on("click", (e) => {e.stopPropagation()});
    
    // close when click somewhere
    $(document).bind("click", function(e) {
        if ($(".collapse").hasClass("show") && e.target !== document.querySelector(".show") && e.target !== document.querySelector(".navbar-toggler")) {$(".navbar-toggler").click()}
    });
    
});

