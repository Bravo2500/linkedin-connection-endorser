// ==UserScript==
// @name        Endorse
// @namespace   LinkedIN
// @include     https://www.linkedin.com/in/*
// @version     1
// @grant       none
// ==/UserScript==

setTimeout(function(){
for(var x = 0; x < 9000; x += 500){
  setTimeout(function(){
      window.scrollTo(0,document.body.scrollHeight);
  }, x);
}

}, 5000);

setTimeout(function(){
    $("button[data-control-name='skill_details']").click();

    $("button[data-control-name='endorse']").each(function(x, e) {

          if(x < 40)
          {
              $(e).click();
          }
          else {
              return;
          }
    });

}, 17500);
