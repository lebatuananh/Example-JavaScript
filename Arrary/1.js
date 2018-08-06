    //chuoi json
    var student=[
    {
        ten:'MRA',
        age:22,
        class:11
    },
    {
        ten:'MRA1',
        age:12,
        class:10
    }
];
for (let i = 0; i < student.length; i++) {
    const element = student[i].ten;
    console.log(element);
}