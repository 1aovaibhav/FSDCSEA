console.log("helllooo")
// var a=12
// console.log("a = "+a)
// if(a>10){
//     let a=30;
//     console.log(a);
// }
// console.log(a);
// let today=Date()
// console.log(today)
// console.log(typeof today)
// let d= function(str = "hello"){
//     console.log("caliing fnction " + str)
// }
// d();
// function sum(a,b,c=40){
//     return a+b+c;
// }
// let total=sum(10,20);

// console.log(total)

function C(){
    return "c calling"
}
function javaC(){
    return "javac calling"
}
function selectL(clb){
    console.log("you selected" + clb)
}
selectL(javaC());