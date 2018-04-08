var searchBtn = document.getElementById("search-btn"),
    viewFlow = document.getElementById("views");

searchBtn.onclick = function() {
    viewFlow.classList.toggle("view-toggle");
    viewFlow.style.transition = "all .3s ease-in";
}
var menH = document.getElementById("men-h"),
	woH = document.getElementById("wom-h"),
	upButton = document.getElementById("button-up"),
	giftH = document.getElementById("gift-h");


   woH.onclick = function() {
	var scroll = window.setInterval(function() {
		var pos = window.pageYOffset;
		if ( pos < 710 ) {
        window.scrollTo(0, pos + 10 );	
    } else {
        window.clearInterval( scroll );
    }
	});
 }
  menH.onclick = function() {
	var scroll = window.setInterval(function() {
		var pos = window.pageYOffset;
		if ( pos < 1130 ) {
        window.scrollTo(0, pos + 15 );
    } else {
        window.clearInterval( scroll );
    }
	});
}  
  giftH.onclick = function() {
	var scroll = window.setInterval(function() {
		var pos = window.pageYOffset;
		if ( pos < 1000 ) {
        window.scrollTo(0, pos + 15 );
    } else {
        window.clearInterval( scroll );
    }
	});
}
upButton.onclick = function(){
var scrollToTop = window.setInterval(function() {
    var pos = window.pageYOffset;
    if ( pos > 0 ) {
        window.scrollTo(0, pos - 60 );
    } else {
        window.clearInterval( scrollToTop );
    }
},10 );
}; 
  


var signIn = document.getElementById("sign-in"),
    signUp = document.getElementById("sign-up"),
    signDiv = document.getElementById("sign-up-div"),
    logDiv = document.getElementById("log-in-div"),
    logImg = document.getElementById("log-img");
signUp.onclick = function () {
    "use strict";
   
    signDiv.style.height = "100%";
}
signIn.onclick = function() {
    "use strict";
   logDiv.style.height = "100%";
   logImg.style.height = "100%";
}

    document.onkeydown = function(evt) {
    evt = evt || window.event;
    if(evt.keyCode == 27){
     signDiv.style.height = "0";
     logDiv.style.height = "0";
     logImg.style.height = "0";
    }
}