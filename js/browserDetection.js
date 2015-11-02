// JavaScript Document


var theBrowser = "Unknown";

var theOSName = "Unknown";

// This script sets OSName variable as follows:
// "Windows"    for all versions of Windows
// "MacOS"      for all versions of Macintosh OS
// "Linux"      for all versions of Linux
// "UNIX"       for all other UNIX flavors 
// "Unknown OS" indicates failure to detect the OS

var theOSName="Unknown OS";

if (navigator.appVersion.indexOf("Win")!=-1) theOSName="Windows";

if (navigator.appVersion.indexOf("Mac")!=-1) theOSName="MacOS";

if (navigator.appVersion.indexOf("X11")!=-1) theOSName="UNIX";

if (navigator.appVersion.indexOf("Linux")!=-1) theOSName="Linux";

//if (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)))  theOSName="iPhone";

// For use within normal web clients 

var isiPad = navigator.userAgent.match(/iPad/i) != null;

// For use within iPad developer UIWebView
// Thanks to Andrew Hedges!

var ua = navigator.userAgent;

var isiPad = /iPad/i.test(ua) || /iPhone OS 3_1_2/i.test(ua) || /iPhone OS 3_2_2/i.test(ua);

//Check for Firefox

if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) theBrowser = "Firefox";

//Check for IE

if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) theBrowser = "IE";
	
//Check for Safari

var browser = navigator.userAgent;

if (browser.toLowerCase().indexOf('safari') > 0) theBrowser = "Safari";

if (isiPad) theBrowser = "iPad";


if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
  theBrowser = "iPad";
}