// Functions



// END Functions

// Script

// $(window).load (function () {
// 	$(document).ready (function () {
		
		
		
// 		}
// 	});
	
// });
$(document).ready (function () {
	$(".button").click (function () {
		$(".frontpage").fadeOut ("slow");
	})
})
$(document).scroll (function () {
		var p = $(".count p");
		var red = $(".red");
		var top = $(document).scrollTop();
		var walk = $("#red").attr ("src");
		//red walk animation
		console.log("Top:" + top);
		if (walk == "img/redwalk2.png") {
			$("#red").attr ("src", "img/redwalk3.png");
			walk = 3;
		} else {
			$("#red").attr ("src", "img/redwalk2.png");
			walk = 2;
		}
		$(p).text ("Scroll:" + top + " ========" + $(red).css("top"));
		// No textbox or red above 250px
		if (top < 250) {
			$(".textbox2").fadeOut("slow");
			$(red).fadeOut("slow");
		}
		// IF under 250px show 1. textbox and red
		else if (top > 250 && 400) {
			$(".textbox2").fadeIn("slow");
			$(red).fadeIn("slow");
		};
		// Wolf arrives at 1500 together with textbox
		if (top > 1500 && top < 2000) {
			$("#wolf").animate({
				left:"60%"
			}, "slow");
			$(".textbox1").fadeIn("slow");
			
		}
		// Fadeout wolf if above 1500
		///else if (top < 1500) {
			// $("#wolf").animate({
			// 	left:"100%"
			// }, "slow");
			//$(".textbox1").fadeOut("slow");
		//};
		// 3. textbox appears at 2100 and dissapears below 3000
		if (top > 2480 && top < 3000) {
			$(".textbox3").fadeIn ("slow");
			$(".textbox4").fadeOut ("slow");
		}
		else if (top > 3000 || top < 2480) {
			$(".textbox3").fadeOut ("slow");
		};
		// Red leaves to pick flowers
		if (top > 3200 && top < 4200) {
			$("#wolf").stop().animate({
				left:"43%"
			}, "slow");
			$(red).stop().animate ({
				left:"-2%"
			}, "slow");
			$(".textbox4").fadeIn ("slow");
		}
		// else if (top < 3200 && top > 1500) { //THIS MAKES IT SLOW
		// 	$(red).animate ({
		// 		left:"50%"
		// 	}, "slow");
		// 	$("#wolf").animate({
		// 		left:"60%"
		// 	}, "slow");
		// }
		if (top > 4551 && top < 5000) {
			$(".textbox5").fadeIn ("slow");
		}
		if (top > 4550) {
			$(".textbox4").fadeOut ("slow");
			$("body").css ("background-attachment", "fixed");
			$(".road").css ({"position":"fixed", "left":"50%", "margin-left":"-80px", "bottom":"350px"});
			$("#cabin2").css({"position":"fixed", "left":"52%", "top":"100px"})
		}
		// reset CSS
		else {
			$(".textbox5").fadeOut ("slow");
			$("body").css ("background-attachment", "");
			$(".road").css ({"position":"", "left":"%", "margin-left":"", "bottom":""});
			$("#cabin2").css({"position":"", "left":"%", "top":""})
		}
		if (top > 5000 && top < 5200) {
			$("#wolf").stop().animate ({
				left:"50%",
				opacity:"0.0"
			});
			$(".textbox5").fadeOut ("slow", function () {
				$(".textbox6").fadeIn ("slow");
			});
			$(red).css ({"top":"-150px"});
			$(red).stop().animate({left:"50%"})
		} else {
			
		}
		if (top > 5100 && top < 7300) {
			$(red).css ("top", "+=20px")
		}
		if (top > 6000 && top < 7100) {
			$(".textbox6").fadeOut ("slow");
			$(".textbox7").fadeIn ("slow");
			
		}
		if (top > 7100 && top < 7400) {
			$(red).stop().animate ({
				left:"60%",
				opacity:"0.0"
			});
			$(".textbox7").fadeOut ("slow");
			$(".textbox8").fadeIn ("slow");
		}
		if (top > 7400 && top < 7700) {
			$(red).animate ({
				left:"45%",
				opacity:"1.0"
			});
			$("#wolf").stop().animate ({
				left:"%90",
				opacity:"1.0"
			}, function () {
				
			});
			
			$(".textbox8").fadeOut ("slow");
			$(".textbox9").fadeIn ("slow");
		}
		if (top > 7700 && top < 7900) {
			$("#man").sotp().animate ({
					left:"20%"
				})
			$(".textbox9").fadeOut ("slow");
			$(".textbox10").fadeIn ("slow");
			
			
			
		}
		if (top > 7900) {
			$("#man").stop().animate ({
					left:"45%"
				}, function () {
					$("#man").addClass("Animate");
					$("#grandma").fadeIn ("slow");
				});
			$("#man").animate ({
				left:"20%",
				top:"300px"
			}, function () {
				$("#man").addClass("Animate2");
			})
			
		};
		if (top > 8400) {
			$(".textbox10").fadeOut ("slow");
			$(".textbox11").fadeIn ("slow");
		}
});
// END Script