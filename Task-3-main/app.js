

var now=new Date()
var date=now.getDay()
// console.log(date);
for(var i=2024;i<2051;i++){
    var now1=new Date(i,0,1).getDay()
    // console.log(now1);
    if(now1==0){
        console.log(`1st jan sunday is ${i} `);
    }
}
