
function navbar(){
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".navbarr");
    var line1 = document.querySelector(".line1");
    var line2 = document.querySelector(".line2");
    var line3 = document.querySelector(".line3");
    var btn = document.querySelector(".main_btn");

    burger.addEventListener("click", function(){
        nav.classList.toggle("navbar-active");
        line1.classList.toggle("line1-active")
        line2.classList.toggle("line2-active")
        line3.classList.toggle("line3-active")
        btn.classList.toggle("main_btn-active")

    });
       
    
}
navbar();








// Section Seven (Counter)
var project =setInterval(projectDone ,10);
var client =setInterval(satisfiedClient ,10)
 var awards =setInterval(InterAwards ,10)
 var team =setInterval(expertTeam ,10)
let count1=1;
let count2=1;
let count3=1;
let count4=1;

 function projectDone(){
     count1++;
     document.querySelector("#number1").innerHTML=count1;
    //  stop
    if(count1==3568){
        clearInterval(project);
    }
 }

 function satisfiedClient(){
    count2++;
    document.querySelector("#number2").innerHTML=count2;
   //  stop
   if(count2==7859){
       clearInterval(client);
   }
}


function InterAwards(){
    count3++;
    document.querySelector("#number3").innerHTML=count3;
   //  stop
   if(count3==6352){
       clearInterval(awards);
   }
}


function expertTeam(){
    count4++;
    document.querySelector("#number4").innerHTML=count4;
   //  stop
   if(count4==7856){
       clearInterval(team);
   }
}

