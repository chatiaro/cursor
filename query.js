$(document).on("click mousemove","body",function(e){ 
    var x = e.clientX;
    var y = e.clientY;
    var newposX = x-10;
    var newposY = y-10; 
    $(".circle").css({top: newposY+'px', left: newposX+'px', position:'absolute'});

});
function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.height();
    var w1 = $div1.width();
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top + 10;
    var h2 = $div2.height()-20;
    var w2 = $div2.width();
    var b2 = y2 + h2;
    var r2 = x2 + w2;
      
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

function defCircle(){
    $(".circle").css("transform","scale(1)"); 
    $(".circle").css("border-radius","50%");
    $(".circle").css("width","30px");    
    $(".circle").css("background","rgba(20, 20, 20, 0.5)");
    $('#playBtn').css("visibility", "hidden");    
}

window.setInterval(function() {
  if(collision($('.circle'), $('.text'))){   
    $(".circle").css({top: $('.text').offset().top-5, left: $('.text').offset().left-10, position:'absolute'});
    $(".circle").css("width",$('.text').width()+20); 
    $(".circle").css("border-radius","20px");             
  }
  else if(collision($('.circle'), $('.video'))){
    $(".circle").css("transform","scale(2)");       
    $(".circle").css("background","white"); 
    $('#playBtn').css("visibility", "visible");       
  }
  else defCircle();  
}, 200);

