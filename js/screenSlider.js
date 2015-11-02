
		
		
		
		
		    // Global Variables ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
			
			
			
			
		    var prevId = 'prevBtn';	
			
			var nextId = 'nextBtn';

			var speed = 1400;			   
             
			var s = 11

			var w = 1500

			var h = 720 

			var t = 0;

            var timeToWaitDuringAnimatedTransitions = speed + 200;
			
			
			
			
			//Core Functions For Animation and Interactivity ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo




			function fadeOutThePreviousButton() {
	
				$("a","#"+prevId).fadeTo(0,0); 
	
				}
				
			
				
			function fadeInThePreviousButton() {
	
				$("a","#"+prevId).fadeIn();
	
				}
				
				
				
			function fadeInTheNextButton(){
				
				$("a","#"+nextId).fadeIn();
				
				}
			
			
			
			function fadeOutTheNextButton(){
				
				$("a","#"+nextId).fadeOut();
				
				}
					
	
	
			function hideTheArrowsDuringAnimation() {
				 $("#nextBtnClicker").stop(true, true).fadeOut(0);
				   
				   $("#prevBtnClicker").stop(true, true).fadeOut(0);
		
				$("#PreviousAndNextButtons").fadeTo(50,0);
								
				$(nextId).css("cursor", "default");
					
				$(prevId).css("cursor", "default");
		
				}
								
		
		
			function hideAllTheVideos(){
	
			    $("#video1").hide(); clickButtonPulse("stop"); $("#videoJS1")[0].player.pause(); //hide the first video
				
				$("#video2").hide(); clickButtonPulse("stop"); $("#videoJS2")[0].player.pause(); //hide the first video
				
				$("#video3").hide(); clickButtonPulse("stop"); $("#videoJS3")[0].player.pause(); //hide the first video 
				
	

				}		
				
				



				
			//CLICK FUNCTIONS FOR NEXT BUTTON ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo





			$("#nextBtnClicker").click(function(){		
	
				
			    if (isEnabled == true && t != 10) {
			        
					isEnabled = false; // disable future clicks until animation is finished
					
					animate("next");//trigger the animation
				
					fadeInThePreviousButton();//fade in the previous button
					
  			 		setTimeout(function(){ }, timeToWaitDuringAnimatedTransitions); // restore functionality after 3 seconds
					 
				   } 

			});




			//CLICK FUNCTIONS FOR PREVIOUS BUTTON oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
			
			
			
			
			$("#prevBtnClicker").click(function(){	
												 									 									 
			
			  if (isEnabled == true  && t != 0) {

					isEnabled = false; // disable future clicks for now
					
					animate("previous"); //trigger the animation
					
					fadeInTheNextButton(); //fade in the next button
					
  				    setTimeout(function(){ }, timeToWaitDuringAnimatedTransitions); // restore functionality after 3 seconds
              
				   }

			});




			//ANIMATION FUNCTION ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
						
						
						
						
			function animate(direction){
				


				switch(direction){

					case "next":

						t =  t+1;						

						break; 

					case "previous":

						t =  t-1;

						break; 

					case "first":

						t = 0;
						

						break; 


					default:

						break; 

				};	





		         p = ((t*w)*-1);//set the position based on number of current item and width of each screen oooooooooooooooooooooooooooooooooooooooooooooooooooooooooo


      

				//show the videos based on the screen number, hide them everywhere else oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
				
		
						
			   $("#nextBtnOver").delay(200).fadeTo(12,1);
			   
			   $("#nextBtnOver").delay(200).fadeOut(0);
			   
			   $("#prevBtnOver").delay(200).fadeTo(12,1); 
			   
			   $("#prevBtnOver").delay(200).fadeOut(0);  
						
			        
				 
				
				hideAllTheVideos();
				
                


				//hide the arrows during animation oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

				   
					
						
						
				hideTheArrowsDuringAnimation(); 
				
			


				//Fade out the current screen's Caption  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
				
				
				
				
				$("#caption" + (screenIncrease)).fadeTo(500, 0 , "easeOutQuint", function(){ 
																								

																						  
				if(direction=="next"){ positionToMovescreenOutTo = -1500; }
				
				if(direction=="previous"){ positionToMovescreenOutTo = 1500; }		
				
																								
						
						
		       //Fade out the current Screen  ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
			   
			   
			   
					
					$("#screenHolder" + screenIncrease).fadeTo(speed-300, 0, "linear", function(){	
																													
															
					
					
					});
				
				
				
				
			   //Move the slider into place by animating the left position of the slideroooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
									
									
									
									
					$("#screen" + screenIncrease).animate({left: positionToMovescreenOutTo, opacity:0}, speed, "easeOutQuart", function(){	
																								
																																									
																											
						});	




               //Which direction to go, and increasing screen numberooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
					
					
					
					
					switch(direction){

						case "next":

							screenIncrease ++;						

							break; 
	
						case "previous":

							screenIncrease --;

							break; 
							
					}
					
					
					
					
			//Fade in the next screen's caption by animating the next screen's caption content ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

					
					
					
					$("#caption" + (screenIncrease)).delay(200).fadeTo(speed + 100, 1, "linear", function(){
																												
																													 
								  
						$("#caption" + (screenIncrease) + "b").animate({opacity:1},0);
						
						isEnabled = true;
					  
					
					
					});																		
					
					
					
					
					
			//Fade in the next screen by animating the opaciity ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
					
					
					
					    $("#screenHolder" + screenIncrease).fadeTo(speed-300, 1, "easeOutQuart")
					 			
								
						
			//Move the next screen into place ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

						
								
						$("#screen" + screenIncrease).animate({left: 0, opacity:1}, speed, "easeOutQuart", function(){	

						 clickButtonPulse("stop");

               			 if(t==0){ clickButtonPulse("start"); videoNumber = 1;} else { $("#video1").hide(); }
						 
						 if(t==6){ clickButtonPulse("start"); videoNumber = 2;} else { $("#video2").hide(); }
						 
               			 if(t==7){ playVideo(3); videoNumber = 3;} else { $("#video3").hide(); }
 
					
			//Fade In the arrows for animation, or hide them at the beginning and end of the screen ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

                   $("#PreviousAndNextButtons").fadeTo(500,1);
				   
				   $("#nextBtnClicker").stop(true, true).fadeIn(0);
				   
				   $("#prevBtnClicker").stop(true, true).fadeIn(0);	
				   
					if(screenIncrease <= 1){ 
					
					    $("#prevBtn").fadeTo(0,0); 
						
						$("#prevBtnOver").fadeTo(0,0); 
						 
						$("#prevBtnClicker").fadeTo(0,0); 
												
	                    $("#prevBtnClicker").css("cursor", "default"); 
			
	                } else {
						
						$("#prevBtnClicker").fadeTo(0,1); 
						
			   
			            $("#prevBtn").delay(200).fadeTo(400,1);  
						
			            $("#prevBtnClicker").css("cursor", "pointer");
						
						$("#nextBtnClicker").css("cursor", "pointer");
									   
	                }
					
					
										
					
	                if(screenIncrease >= 11){ 
	  
	                    $("#nextBtn").fadeTo(0,0);
						
						$("#nextBtnOver").fadeTo(0,0); 
						 
						$("#nextBtnClicker").fadeTo(0,0);
						
	                    $("#nextBtn").css("cursor", "default"); 
								   
	                } else { 
								   
		            	$("#nextBtn").delay(200).fadeTo(400,1);  
						
						$("#nextBtnClicker").fadeTo(0,1);
						
			            $("#nextBtnClicker").css("cursor", "pointer");
						
						$("#prevBtnClicker").css("cursor", "pointer");
									
		            }   														
					
					
					if(screenIncrease <= 1){ 
					
					    $("#prevBtn").fadeTo(0,0); 
												
	                    $("#prevBtnClicker").css("cursor", "default"); 
			
	                } 
					
					  if(screenIncrease >= 11){ 
	  
	                    $("#nextBtn").fadeTo(0,0); 
						
	                    $("#nextBtnClicker").css("cursor", "default"); 
						
						}
					
					
   															 																										   
					 }); 

				     }); 

					  };
