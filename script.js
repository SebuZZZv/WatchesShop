



$(document).ready(function () {
    var sectionDiv = $(".first, .first2, .first3");
    var scrollDirection = 'up'; 
    var div = 0; 
    var animation = $('.black-line');
    $('body').on('DOMMouseScroll mousewheel', function (e) {
        if (e.originalEvent.detail > 0 || e.originalEvent.wheeldata < 0) {
            scrollDirection = 'down';
            
            animation.animate({
                opacity: '0'

            });
            animation.animate({
                opacity: '1'

            }, 1000);
        

            

        } else {
            scrollDirection = 'up';
        }
        // find currently visible div :
        div = -1;
        sectionDiv.each(function(i){
            if (div<0 && ($(this).offset().top >= $(window).scrollTop())) {
                div = i;
            }
        });
        if (scrollDirection == 'up' && div > 0) {
            div--;
        }
        if (scrollDirection == 'down' && div < sectionDiv.length) {
            div++;
        }
        //console.log(div, dir, divs.length);
        $('html,body').stop().animate({
            scrollTop: sectionDiv.eq(div).offset().top
        }, 800);
        return false;
    });
  
    $(window).resize(function () {
        $('html,body').scrollTop(sectionDiv.eq(div).offset().top);
       
    });
    
});
// BUTTONS UP AND DOWN LAST SECTION
$(".upper").click(function () { 
    var topPos = $('.box-watches').scrollTop();
    $(".box-watches").animate({scrollTop: topPos - 300}, );
  });
  
  $(".lower").click(function () { 
    var topPos = $('.box-watches').scrollTop();
    $(".box-watches").animate({scrollTop: topPos + 300}, );
  });

  
// CHANGE FOTO INSIDE BIG CIRCLE 
  $(document).ready(function() {
    $('.replace').click(function() {
      $('.change').attr('src', $(this).attr('src'));
      
    });
  });
  // REPLACE BACKGROUND ON CIRCLE BEHIND WATCH FOTO
  $(document).ready(function() {
    $('.little-rectangle1').click(function() {
     $('.circle').attr('style', $(this).attr('style'))
     $('.circle').animate({left: "20px"}, 900);
    
     
   });
  });
var price = document.querySelector (".price");
var model = document.querySelector (".model");

var firstWatch = document.querySelector(".watch1");
var twoWatch = document.querySelector(".watch2");
var threeWatch = document.querySelector(".watch3");
var fourWatch = document.querySelector(".watch4");
var fiveWatch = document.querySelector(".watch5");
var SixWatch = document.querySelector(".watch6");
var SevenWatch = document.querySelector(".watch7");
// PRICE OF WATCHES
   var modelPrice = [
    document.createTextNode("Price: 126,29€"),
    document.createTextNode("Price: 134,07€"),
    document.createTextNode("Price: 63,15€"),
    document.createTextNode("Price: 147,07€"),
    document.createTextNode("Price: 145,61€"),
    document.createTextNode("Price: 117,21€"),
    document.createTextNode("Price: 198,64€"),
   ];
// MODELS OF WATCHES
   var nameModel = [
    document.createTextNode("Model: Casio Edifice M ZB EFR-556D-1AVUEF"),
    document.createTextNode("Model: Casio Edifice EFR-547D-2AVUEF"),
    document.createTextNode("Model: Casio MTP-1303L-1AVEF"),
    document.createTextNode("Model: Casio EDIFICE EFR-556DB-1AV"),
    document.createTextNode("Model: Casio G-Shock Original GA-2000-1A9ER"),
    document.createTextNode("Model: Casio EFV-580D-1AVUEF"),
    document.createTextNode("Model: Casio G-Shock GM-S2100PG-1A4ER"),
   ]
    
//CHANGE MODEL AND PRICE
//FIRST WATCH    
firstWatch.addEventListener("click", () => {  

    model.replaceChild(nameModel[0], model.childNodes[0]);
    price.replaceChild(modelPrice[0], price.childNodes[0]);
});

twoWatch.addEventListener("click", () => {   
    model.replaceChild(nameModel[1], model.childNodes[0]);
    price.replaceChild(modelPrice[1], price.childNodes[0]);
});

threeWatch.addEventListener("click", () => {   
    model.replaceChild(nameModel[2], model.childNodes[0]);
    price.replaceChild(modelPrice[2], price.childNodes[0]);
});  

fourWatch.addEventListener("click", () => {   
    model.replaceChild(nameModel[3], model.childNodes[0]);
    price.replaceChild(modelPrice[3], price.childNodes[0]);
}); 

fiveWatch.addEventListener("click", () => {   
    model.replaceChild(nameModel[4], model.childNodes[0]);
    price.replaceChild(modelPrice[4], price.childNodes[0]);
}); 
SixWatch.addEventListener("click", () => {   
    model.replaceChild(nameModel[5], model.childNodes[0]);
    price.replaceChild(modelPrice[5], price.childNodes[0]);
}); 
SevenWatch.addEventListener("click", () => {   
    model.replaceChild(nameModel[6], model.childNodes[0]);
    price.replaceChild(modelPrice[6], price.childNodes[0]);
}); 
  





  
 