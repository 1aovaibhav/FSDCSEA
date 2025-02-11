function sum(num1,num2){
    return num1+num2;
}
const multiplication = (num1,num2) =>{
    return num1*num2;
}
const obj={
    // sum:sum,
    // multiplication:multiplication
    sum,
    multiplication
}
module.exports=obj;