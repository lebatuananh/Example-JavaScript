// var listDiv=document.getElementsByTagName('div');
// console.log(listDiv[1]);
// var listH1=document.getElementsByTagName("h1");
// console.log(listH1[0].innerHTML);
// for (let index = 0; index < listH1.length; index++) {
//     listH1[index].innerHTML="ABCD";
// }
var listTitle=document.getElementsByTagName('h4');
for (let i = 0; i < listTitle.length; i++) {
   listTitle[i].innerHTML="MRAMRA";
}
var card=document.getElementById('card');
console.log(card);
var h4=document.getElementById('h4');
console.log(h4);
var cardText=document.getElementsByClassName('card-text');
console.log(cardText);
for (let i = 0; i < cardText.length; i++) {
    cardText[i].innerHTML='MRA Study JS';
}
var listGroup=document.querySelector('.list-group-item');//tra ve phan tu dau tien
var listGroupAll=document.querySelectorAll('.list-group-item');
console.log(listGroup);
console.log(listGroupAll);

document.addEventListener("DOMContentLoaded",function(){
    var b1=document.getElementById('b1');
    console.log(b1);
    var cardText=document.getElementsByClassName('card-text');
    b1.onclick=function(){
        console.log("you are click "+b1);
        b1.classList.add('down');
        for (let i = 0; i < cardText.length; i++) {
            cardText[i].classList.add('disappear');
            
        }
    }
},false)