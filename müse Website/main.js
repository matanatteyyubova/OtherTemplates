

var clicked=false;
function my(){
    if(!clicked){
        clicked=true;
        document.getElementById("main").innerHTML = "$10";
        document.getElementById("main2").innerHTML = "$49";
    }
    else if(clicked) {
        clicked=false
        document.getElementById("main").innerHTML = "$0"; 
        document.getElementById("main2").innerHTML = "$24";
    }
    else{
        document.write("Acmışam")
    }
}
