// JavaScript Document
// Finds the right sylesheet depending on the browser

if (theBrowser == "Safari") {   

	document.write("<link rel=\"stylesheet\" href=\"css/safari-adjust.css\" type=\"text/css\" />");

	}

if (theBrowser == "Firefox") { }

if (theBrowser == "IE") { }

if (theBrowser == "iPad") {


	document.write("<link rel=\"stylesheet\" href=\"css/safari-adjust.css\" type=\"text/css\" />");
	
	document.write("<link rel=\"stylesheet\" href=\"css/iPad-adjust.css\" type=\"text/css\" />");

	}

if(theOSName="Windows" && theBrowser == "Firefox") {
	
	document.write("<link rel=\"stylesheet\" href=\"css/firefoxpc-adjust.css\" type=\"text/css\" />");
	
	}