
// Navbar
function menuToggleNav(){
    document.querySelector(".dropdown_menu-nav").classList.toggle("active")
}
function menuToggleNav2(){
    document.querySelector(".dropdown_menu-nav-2").classList.toggle("active")
}
function menuToggleNav3(){
    document.querySelector(".dropdown_menu-nav-3").classList.toggle("active")
}
function menuToggleNav4(){
    document.querySelector(".dropdown_menu-nav-4").classList.toggle("active")
}







var btns = header.getElementsByClassName(".btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  }); 
}



function two() {

    document.querySelector(".foto1").style.backgroundImage = "url('https://demo2.chethemes.com/mediacenter/wp-content/uploads/2014/09/p23-246x186.png')"
    document.querySelector(".foto2").style.backgroundImage = "url('https://demo2.chethemes.com/mediacenter/wp-content/uploads/2014/09/p15.1-246x186.png')"
    document.querySelector(".foto3").style.backgroundImage = "url('https://demo2.chethemes.com/mediacenter/wp-content/uploads/2014/09/9-246x186.jpg')"
    document.querySelector(".foto4").style.backgroundImage = "url('https://demo2.chethemes.com/mediacenter/wp-content/uploads/2014/09/81-DD-c1jdL._SL1500_-246x186.jpg')"
    document.querySelector(".linktxt").innerHTML="50\" (diag) W800B Premium  LED HDTV"
    document.querySelector(".linktxt2").innerHTML="65\" Class (diag) X950B Flagship 4K Ultra HD TV"
    document.querySelector(".linktxt3").innerHTML="Cyber-shot Digital Camera WX300"
    document.querySelector(".linktxt4").innerHTML=" Dell Inspiron 15.6-Inch Touchscreen Laptop"
    document.querySelector(".p1").innerHTML="SONY"
    document.querySelector(".p2").innerHTML="SONY"
    document.querySelector(".p3").innerHTML="SONY"
    document.querySelector(".p4").innerHTML="DELL"

    document.querySelector(".p_left").innerHTML=`<del><i class="fa fa-eur" aria-hidden="true"></i>1.999.99</del>`
    document.querySelector(".p_right").innerHTML=`<i class="fa fa-eur" aria-hidden="true"></i> 999.99`

    document.querySelector(".p_left2").innerHTML=`<del><i class="fa fa-eur" aria-hidden="true"></i>7.999.99</del>`
    document.querySelector(".p_right2").innerHTML=`<i class="fa fa-eur" aria-hidden="true"></i> 6.999.99`

    document.querySelector(".p_left3").innerHTML=""
    document.querySelector(".p_right3").innerHTML=`<i class="fa fa-eur" aria-hidden="true"></i> 249.99-<i class="fa fa-eur" aria-hidden="true"></i> 329.99`

    document.querySelector(".p_left4").innerHTML=`<del><i class="fa fa-eur" aria-hidden="true"></i> 899.99</del>`
    document.querySelector(".p_right4").innerHTML=`<i class="fa fa-eur" aria-hidden="true"></i> 849.00`
}
function three() {

    document.querySelector(".foto1").style.backgroundImage = "url('https://demo2.chethemes.com/mediacenter/wp-content/uploads/2014/09/27-246x186.jpg')"
    document.querySelector(".foto2").style.backgroundImage = "url('https://demo2.chethemes.com/mediacenter/wp-content/uploads/2014/09/31-246x186.jpg')"
    document.querySelector(".foto3").style.backgroundImage = "url('https://demo2.chethemes.com/mediacenter/wp-content/uploads/2014/09/p23-246x186.png')"
    document.querySelector(".foto4").style.backgroundImage = "url('https://demo2.chethemes.com/mediacenter/wp-content/uploads/2014/09/12-246x186.jpg')"

    document.querySelector(".linktxt").innerHTML="2-way Bluetooth Adaptor"
    document.querySelector(".linktxt2").innerHTML="Floor Standing Speaker"
    document.querySelector(".linktxt3").innerHTML=" 50\" (diag) W800B Premium  LED HDTV"
    document.querySelector(".linktxt4").innerHTML="POV action Cam HDR- AS100V "
    document.querySelector(".p1").innerHTML="SONY"
    document.querySelector(".p2").innerHTML="SONY"
    document.querySelector(".p3").innerHTML="SONY"
    document.querySelector(".p4").innerHTML="SONY"

    document.querySelector(".p_left").innerHTML=""
    document.querySelector(".p_right").innerHTML=`<i class="fa fa-eur" aria-hidden="true"></i> 79.99`

    document.querySelector(".p_left2").innerHTML=""
    document.querySelector(".p_right2").innerHTML=`<i class="fa fa-eur" aria-hidden="true"></i> 199.99`

    document.querySelector(".p_left3").innerHTML=`<del><i class="fa fa-eur" aria-hidden="true"></i> 1.999.99</del>`
    document.querySelector(".p_right3").innerHTML=`<i class="fa fa-eur" aria-hidden="true"></i> 999.99`

    document.querySelector(".p_left4").innerHTML=`<del><i class="fa fa-eur" aria-hidden="true"></i> 299.99</del>`
    document.querySelector(".p_right4").innerHTML=`<i class="fa fa-eur" aria-hidden="true"></i> 269.99`
}
function one() {

    document.querySelector(".foto1").style.backgroundImage = "url('https://demo2.chethemes.com/mediacenter/wp-content/uploads/2014/09/p4.2-246x186.png')"
    document.querySelector(".foto2").style.backgroundImage = "url('https://demo2.chethemes.com/mediacenter/wp-content/uploads/2014/09/12-246x186.jpg')"
    document.querySelector(".foto3").style.backgroundImage = "url('https://demo2.chethemes.com/mediacenter/wp-content/uploads/2014/09/53-246x186.jpg')"
    document.querySelector(".foto4").style.backgroundImage = "url('https://demo2.chethemes.com/mediacenter/wp-content/uploads/2014/09/9-246x186.jpg')"
    document.querySelector(".linktxt").innerHTML="Iconia W700"
    document.querySelector(".linktxt2").innerHTML="POV action Cam HDR- <br>AS100V"
    document.querySelector(".linktxt3").innerHTML=" Play Station 4"
    document.querySelector(".linktxt4").innerHTML="Cyber-shot Digital Camera WX300 "
    document.querySelector(".p1").innerHTML="ACER"
    document.querySelector(".p2").innerHTML="SONY"
    document.querySelector(".p3").innerHTML="SONY"
    document.querySelector(".p4").innerHTML="SONY"

    document.querySelector(".p_left").innerHTML=""
    document.querySelector(".p_right").innerHTML=`<i class="fa fa-eur" aria-hidden="true"></i> 629.99`

    document.querySelector(".p_left2").innerHTML=`<del><i class="fa fa-eur" aria-hidden="true"></i>299.99</del>`
    document.querySelector(".p_right2").innerHTML=`<i class="fa fa-eur" aria-hidden="true"></i> 269.99`

    document.querySelector(".p_left3").innerHTML=""
    document.querySelector(".p_right3").innerHTML=`<i class="fa fa-eur" aria-hidden="true"></i> 399.99`

    document.querySelector(".p_left4").innerHTML=""
    document.querySelector(".p_right4").innerHTML=`<i class="fa fa-eur" aria-hidden="true"></i> 249.99-<i class="fa fa-eur" aria-hidden="true"></i> 329.99`
}


// Section 5
function photo1() {
   
   
    document.querySelector(".photoSlide").style.backgroundImage="url('https://demo2.chethemes.com/mediacenter/wp-content/uploads/2014/09/p15.1-433x361.png')"
 }
 function photo2() {
   
   
    document.querySelector(".photoSlide").style.backgroundImage="url('https://demo2.chethemes.com/mediacenter/wp-content/uploads/2014/09/p15.1-433x361.png')"
 }
function photo3() {
   
   
   document.querySelector(".photoSlide").style.backgroundImage="url('https://demo2.chethemes.com/mediacenter/wp-content/uploads/2014/09/p15.2-433x361.png')"
}

function photo4() {
   
   
    document.querySelector(".photoSlide").style.backgroundImage="url('https://demo2.chethemes.com/mediacenter/wp-content/uploads/2014/09/p15-433x361.png')"
 }