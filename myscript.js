$(document).ready(function(){
  
    $('div:first-child').hide();
    $('div#overlay').hide();
    $('body').css('overflow','auto');
  /*$('span').on('click', function(){
    $('div:first-child').hide();
    $('div#overlay').hide();
    $('body').css('overflow','auto');
  });*/
  $('div.arabic').on('click', function(){
    $(this).next().slideToggle();
  });
  $('input#fontSlider').on('input', function(){
    $('body').css('font-size', this.value+"px");
  });
});

window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/jummah-khutbah/sw.js");
  }
});