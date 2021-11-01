// const deg=6;
// const hr=document.querySelector('#hr');
// const mn= document.querySelector('#mn');
// const sc= document.querySelector('#sc');


// setInterval(() =>{
//     let day=new Date();
//     let hh=day.getHours()*30;
//     let mm=day.getMinutes()*deg;
//     let ss=day.getSeconds()*deg;
    
//     hr.style.transform=`rotateZ(${(hh)+(mm/12)}deg)`;
//     mn.style.transform=`rotateZ(${mm}deg)`;
//     sc.style.transform=`rotateZ(${ss}deg)`;  
// })


const sec=document.querySelector(".sc");
const min=document.querySelector(".mn");
const hours=document.querySelector(".hr");
function clockEvent(){
let  hour= new Date().getHours();
let  minute= new Date().getMinutes();
let  second= new Date().getSeconds();
 
sec.style.transform=`rotate(${second*6}deg)`;
min.style.transform=`rotate(${minute*6}deg)`;
hours.style.transform=`rotate(${hour*30}deg)`;

}
setInterval (clockEvent ,1000);