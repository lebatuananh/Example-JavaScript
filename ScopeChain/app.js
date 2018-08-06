function b() {
    var text ='abc';
    c();
   function c(){
       
       d();
       function d(){
           console.log(text)
       }
   }
}
function a(){
    var text = 'in a';
    b();
}
var text="in global";
//a();
//b();
function e (){
  if(true){
      var a=5;
  }
  console.log(a);
}
e();