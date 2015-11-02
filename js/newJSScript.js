
// Set up variables



var currentSection = "titleScreen"; //sets the current state of navigation in each section

var screenIncrease= 1; // define the slider number variable to count the slider clicked

var isEnabled = true;

var screenIncrease = 1;

var easeStyle = "easeOutQuart"; 

var topnav1Color = "#999999";

var topnav2Color = "#999999";

var topnav3Color = "#999999";

var animationTime = 1000;

var delayTime = 100;	

var videoNumber = "1";

var startAtTheBeginning = true;


// when document is ready, load the slider js and run init() function




$(document).ready(function() {
						   
	
	$("video").VideoJS()
	
	$("#video1").hide()
	
	$("#video2").hide()	
	
	$("#video3").hide()
	
	
//Make the first arrow pulse
	
					   
	pulseMaker();
	
	
//Attach click handlers for the main navigation
	
	
	
	
	$('.things_link').click(function() { startContent(); });
	
	$('.things_link_fromtitle').click(function() { startContent(); });
	
	$('.clients_link').click(function() { ourClients(); });
	
	$('.contact_link').click(function() { showContact(); });
	
	$('.logo').click(function() { goBackToTitle(); });
	
	
	
//Attach click handlers for the video playback


	
	$('#ClickHereVideoButtons').click(function() {
		
		$("#video" + videoNumber).show(); 
		
  		$("#video" + videoNumber).fadeIn(1000); 
		
		$("#video" + videoNumber).css("z-index",900);
		
		$("#videoJS" + videoNumber)[0].player.play();
		
		$("#videoJS" + videoNumber)[0].player.currentTime(0);
		
	});
	
	
	
	
	
//Attach hover handlers for main navigation


	
	$("#prevBtnClicker").hover(function(){$("#prevBtnOver").stop(true, true).fadeIn(500); }, function(){$("#prevBtnOver").stop(true, true).fadeOut(500); });
	
    $("#nextBtnClicker").hover(function(){$("#nextBtnOver").stop(true, true).fadeIn(500); }, function(){$("#nextBtnOver").stop(true, true).fadeOut(500); });	
	
	$("#topnav1").hover(function(){$(".things_link").stop(true, true).animate({ color: "red"}, 800, "easeOutQuint");}, function(){$(".things_link").stop(true, true).animate({color: topnav1Color}, 800, "easeOutQuint")});
	
	$("#topnav2").hover(function(){$(".clients_link").stop(true, true).animate({ color: "red"}, 800, "easeOutQuint");}, function(){$(".clients_link").stop(true, true).animate({color: topnav2Color}, 800, "easeOutQuint")});	
	
	$("#topnav3").hover(function(){$(".contact_link").stop(true, true).animate({ color: "red"}, 800, "easeOutQuint");}, function(){$(".contact_link").stop(true, true).animate({color: topnav3Color}, 800, "easeOutQuint")});	




//Attach hover handlers for main navigation

	  
   	for (i=1;i<=11;i++){

		$("#caption" + i ).hide();

      }	
	
//Set Up The Slider
	
	init();
	
	
});




// init content animations




function init() { 
 
 	
 	// fade in logo when page loads
 	$("#logo").delay(delayTime*10).fadeIn(animationTime); 
 
 	// fade in logo when page loads
 	$("#nav").delay(delayTime*10).fadeIn(animationTime); 
	
 	// fade in title when page loads
 	$("#titleAndArrow").delay(delayTime*10).fadeIn(animationTime); 
	
		

}
 
 


// when 11 things you should know about eleven is clicked, will run this function




function startContent(){
	
	
	
	
// Reset the Panels and Buttons-------------------------------------------------
	
	
	
	
if(currentSection != "11Things") {
		
		
		
		
	//screenIncrease = 1;
	
	
	
	
	isEnabled = false;
	
	
	
	
    for (i=2;i<=12;i++){
			  
		$("#screenHolder" + i).fadeTo(0,0);  
			  
	  }
	
	
	
	
	$("#screen1").animate({opacity: 1},1000, "easeOutQuint");




	// End Reset the screens and Buttons---------------------------------------------
	
	
	
	
	transition("Slider");
	
	topnav1Color = "#000000";


		

	

	}
	
}
	
	


// when our clients menu is clicked




function ourClients(){
	

	if(currentSection != "ourClients" && isEnabled==true) {
		
	currentSection = "ourClients";
	
	transition("ourClients"); 
	
    topnav2Color = "#000000";
	
	for(var i=1; i<=16; i++){$("#logo" + i).hide();}
	
	for(var i=1; i<=16; i++){$("#logo" + i).delay(100*i).fadeIn(500);}
	
	}
	
	
}
 



// when logo at the left hand cursor is clicked




function goBackToTitle(){
	
	
	if(currentSection != "titleScreen" && isEnabled==true) {
		
		currentSection = "titleScreen";
		
		transition("Title"); 
		
		setAllNavsGrey();

	}
	
	
}


// when contact us is clicked, run this function

function showContact(){
	
	if(currentSection != "showContact" && isEnabled==true) {
		
	   currentSection = "showContact";
		
	   transition("Contact");
		
       topnav3Color = "#000000";

	}

}




function transition(whereTo) {
	
	
    setAllNavsGrey();
	
	setLeftandRightNavigationInactive();
	
	hideCaptionScreens(); 

    videoNumber = "1";
     
	hideVideos();  
	 
	clickButtonPulse("stop");
 
	 $("#PreviousAndNextButtons").fadeTo(0, 0);
		
	 

    $("#textCaptionContent").fadeTo(1,0);






	
	if(whereTo != "Title") {
		
		$("#title").fadeOut(300); 
		
		} else{ 
		
		$("#title").fadeIn(1000);
		
		}
		
		
		
		
		
		
		
	
	if(whereTo != "Contact") { 
	
		$("#contact").fadeTo(500, 0); 
		
		$(".contact_link").animate({color: "#999999"}, 1000, easeStyle); 
		
		} 
		else { 	
		
		$("#contact").delay(500).fadeTo(1000, 1);
		
		$(".contact_link").animate({color: "#000000"}, 1000, easeStyle);
		
		}
		
		
		
		
		
		
	
	if(whereTo != "ourClients") { 
	
	
		$("#ourClients").fadeTo(500, 0); 
		
		$(".clients_link").animate({color: "#999999"}, 1000, easeStyle); 
		
		
		} else{ 
		
		
		$("#ourClients").fadeTo(1000, 1); 
		
		$(".clients_link").animate({color: "#000000"}, 1000, easeStyle);
		
		
		}
		
		
		
		
		
		
	
	if(whereTo != "Slider") {
		
		$("#video").hide(); clickButtonPulse("stop"); $("#videoJS1")[0].player.pause(); //hide the first video
	
		$("#slider").fadeOut(); 
		
		$(".things_link").animate({color: "#999999"}, 1000, easeStyle);
	
	
		} else {
			
			
		currentSection = "11Things";  //set the current section

			
		//Fade The Nav Item to Black
		
		
		$(".things_link").animate({color: "#000000"}, 1000, easeStyle);	
		
		
		
		if(startAtTheBeginning) {
		
			gotoFirstScreen(); 
		
		} else {
			
				$("#slider").delay(100).fadeIn(10000)
			
			}

		
		
		}
			
	}
	
	
	
	
	
function setAllNavsGrey(){
	
	
		topnav1Color = "#999999";
		
        topnav2Color = "#999999";
		
        topnav3Color = "#999999";
		
	
	}
	
	
	
	
	
	
function pulseMaker() {
	
	
	if(currentSection == "titleScreen") {
		
	 $("#newStartButton").removeClass('afterArrow').addClass('beforeArrow');
					
	 $('#newStartButton').pulse({ opacity: [0,1]},900, 99999, 'linear');
	
		} else {
			
			$("#newStartButton").removeClass('beforeArrow').addClass('afterArrow');
			
			$('#newStartButton').stop();
			
			$("#newStartButton").fadeTo(0, 1); 
							
	    }
		
		
		
	}
	
	
	
	
	
function setLeftandRightNavigationInactive(){
	
	
	$("#nextBtnClicker").css("cursor", "default");
		
	$("#prevBtnClicker").css("cursor", "default");	
	
	$("#nextBtn").fadeOut();
	
	$("#prevBtn").fadeOut();
	
	
	
	}
	
	
	
	
	
	
function hideCaptionScreens() {
	
		
   	for (i=1;i<=11;i++){	
		
		$("#caption" + i).fadeTo(0,0);
		

      }	
		
	
	}
	



function clickButtonPulse(startThePulse) {
	
	if(startThePulse == "start") {
		
	 $("#ClickHereVideoButtons").fadeTo(400,1);

	 $('#ClickHereVideoButtonLighter').pulse({ opacity: [0,1]},900, 99999, 'linear');
	
		} else {
			
			$('#ClickHereVideoButtonLighter').stop();
			
			$("#ClickHereVideoButtons").hide(); 
			
							
	    }
		
	}
	
	
	function playVideo(videoNumberToPlay) {
		
		$("#video" + videoNumberToPlay).show(); 
  		$("#video" + videoNumberToPlay).fadeIn(1000); 
		$("#video" + videoNumberToPlay).css("z-index",900);
		
		$("#videoJS" + videoNumberToPlay)[0].player.play();
		$("#videoJS" + videoNumberToPlay)[0].player.currentTime(0);
		
		
		}
		
		
function hideVideos() {
		
                $("#video1").hide(); clickButtonPulse("stop"); $("#videoJS1")[0].player.pause(); //hide the first video
				
				$("#video2").hide(); clickButtonPulse("stop"); $("#videoJS2")[0].player.pause(); //hide the first video
				
				$("#video3").hide(); clickButtonPulse("stop"); $("#videoJS3")[0].player.pause(); //hide the first video 
		
		
		}
		
		
		
		
function gotoFirstScreen() {
	
			
		//Reset the Screen Number 
		
		t = 0;
			
		screenIncrease=1;
		
		
		//Move all the screens to 1500 pixels right.

		
	   for (i=1;i<=11;i++){
		  
			  
		$("#screenHolder" + i).fadeTo(0,0);
		
		$("#screen" + i).css("left", 1500);
		
			  
	  	}
		
		
		
		//Show the Captions, and hide the first captions


		
		$("#textCaptionContent").show();
		
		$("#textCaptionContent").fadeTo(0,1);
		
		$("#caption1").fadeTo(0, 0);
		
		
		
		
		//Set the Next Arrow rollover with a hand cursor and and the Previous Arrow with an arrow.
		
		 $("#PreviousAndNextButtons").delay(800).fadeTo("swing", 1);
		
		$("#nextBtnClicker").css("cursor", "pointer");	
			
		$("#prevBtnClicker").css("cursor", "default");	
		
	
		$("#nextBtn").delay(800).fadeTo("swing", 1);
		
		$("#nextBtn").fadeTo(300,1);  
		
		
		//$("#prevBtn").fadeTo(0,1);
		
		$("#prevBtn").fadeTo(0,0); 
						
		$("#prevBtnOver").fadeTo(0,0); 
						 
		$("#prevBtnClicker").fadeTo(0,0); 
												
	    $("#prevBtnClicker").css("cursor", "default"); 
			
		//Set screen 1 in place.



		$("#screen1").css("left", 0); //move the screen into position
		
		$("#screenHolder1").animate({opacity:1},0); //set the opactity to 1
		
		
		
		//Fade In the entire Slider
		
		
		
		$("#slider").delay(100).fadeIn(1000, function(){  
									  
		   
		  isEnabled = true
		   
		   clickButtonPulse("start");
		   
		   
		 });
		

		
			
		//Fade In the first caption, and After it is loaded, Set the caption rollover opacity to 1
		
		
		$("#caption1").delay(300).fadeTo(2000, 1, "easeOutQuint", function(){ 
													
			
		
		
		});	
	
	
	
	}