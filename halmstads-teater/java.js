$(document).ready(function(){
    
   
//Visa fler föreställningar//
    
   $('.nya').hide();
   $('#showbtn').click(function() {
        $('.nya').fadeIn(1000);
        $('#showbtn').hide();
    });
    
 
 // MENY //
        
$('.hamburger').on('click', function(){
    
    $('.menu').toggle('open')    

   });
    
 
    
  // POPUP BOKA/GÖM MENY // 
    
   $('.popup-inner').click(function() {
        
        $('header').hide();
        
    });
    
      $('.popup-close').click(function() {
        
        window.location.reload();
        
    });
    

   
    
// NAV SCROLLER //    
    
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 400) {
            $('nav').addClass('stickytop');
        }
        else {
            $('nav').removeClass('stickytop');
        }
    });
});  
    
    
    
// POPUP "konferenser" //    
    
    
$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class +  '"]').fadeOut(350);
 
        e.preventDefault();
    });
     
});

$(function(){$(".a").click(function(){$("html,body").animate({scrollTop:$(".container").offset().top},"500");return false})})
;
    
// Submitt // 


});

function submitFunction()
{

var email=document.forms["registration"]["email"].value;
    
    if(email.length>5)
    {
        window.location.reload();
        alert("Tack för din bokning!");
    }
   else{
       
       alert("Skriv in ditt mail")
   }


}
