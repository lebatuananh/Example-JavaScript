//anonumous function
var z=function(x,y) {
    return x+y;    
}
console.log(z(10,2));

function hello() {
    var name="MRA";
    return function() {
        console.log("Xin chao "+name);
    }    
}

function hello1(){
    var name="MRA";
    var notice=function () {
        console.log("Xin chao "+name);
    }
    var name=name+" va MRA1";
    return notice;
}
// khi nào có lệnh return thì mới trả ra thông báo
var h=hello();
h();
var j=hello1();
j();