$(document).ready(function(){$("ul.products.flex > li").hover(function(){var t=$(this).find("img").attr("src").replace("_145","_org");$(".hinhbu > img").attr("src",t)},function(){}),$(".list-tabs ul li").click(function(t){t.preventDefault(),$(".list-tabs ul li a").removeClass("active"),$(this).find("a").addClass("active");var a=$(this).index();$(".tab-content .tab").hide(),$(".tab-content .tab").removeClass("active"),$(".tab-content .tab").eq(a).addClass("active"),$(".tab-content .tab").eq(a).show()}),$(".close-banner").click(function(t){t.preventDefault(),$(".banner-promotion").hide()}),$(".owl-carousel").owlCarousel({items:1,nav:!1,autoplay:!0,animateIn:"fadeInLeft",animateOut:"slideOutDown"})});