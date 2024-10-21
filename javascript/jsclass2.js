// // console.log(document);
// console.dir(document);
// const d=document.getElementsByClassName("parent");
// console.log(d);
// // d[0].innerText="ABES";
// d[0].innerHTML="<h1 style=color:red;>ABES</h1>";
// const h2=document.createElement("h2");
// h2.innerText="tag is created by DOM";
// console.log(h2);    
// h2.style.backgroundColor="beige";
// d[0].appendChild(h2);
// const image=document.createElement('img');
// image.src='1.jpg';
// console.log(image);
// image.setAttribute('height','200px');
// d[0].appendChild(image);
// d[0].removeChild(h2);

// const button=document.getElementById("btn");
// console.log(button);

// const display=document.getElementById("disp");
// console.log(display);

// function getData(){
//     console.log("calling getdata function");
//     display.innerHTML="<h3 style=color:orange;>welcome to CSE department</h3>"
// }
// button.addEventListener("click",getData);
// let a=12;
// const promise1=new Promise((resolve,reject)=>{
// if (a>10) {
//   resolve("value of a is resolved");  
// }
// else{
//     reject("value of a is rejected");  
// }
// }
// );
// let b=Math.random()*1000;
// const promise2=new Promise((resolve,reject)=>{
//     if (b>=100 && b<=200) {
//       resolve("value of b is resolved "+b);  
//     }
//     else{
//         reject("value of b is rejected "+b);  
//     }
//     }
//     );
// promise2.then((msg)=>{
//     console.log(msg)
// }).catch(error=>{console.log(error)}).finally(msg=>{console.log("all resorces have been closed")});

const response = fetch("https://dummyjson.com/products");
response.then(data=>{
    console.log((data));
    data.json().then(res=>{console.log(res.products[0].title)})
});
