var student={
    name:'MRA',
    age:22,
    class:13
}
//var student1=student;//lúc này student1 và student dùng chung vùng nhớ nên khi thay 
                    //đổi student thì student1 cũng đổi nên phải dùng contructor
//student1.age=20;
//console.log(student1);
//console.log(student);

function studentBasic(n,a,c) {
    this.name=n;
    this.age=a;
    this.class=c;
}
var student2=new studentBasic('MRA1',22,12);
var student3=new studentBasic('MRA2',20,10);
console.log(student2);  
console.log(student3);



