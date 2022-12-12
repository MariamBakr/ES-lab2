

///q1/////
// fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
//     let results=result.json();
//     console.log(results);
//     return results;})
//     // console.log(users.length);
// .then((data)=>{
//     let d=data.length;
//     console.log(d);
//     return data;
// }).then((data)=>{
//     for(i=0; i<data.length;i++){
//     let n=data[i].name;
//     let userId=data[i].id;
//     let btn = document.createElement("button");
//     btn.innerHTML = n;
//     let link="https://jsonplaceholder.typicode.com/posts?userId="+userId;
//     async function load_titles(){
//         let res=await fetch (link);
//         let j=await res.json();
//         for(i=0; i<j.length; i++){
//         let title=j[i].title;
//         document.write(title);
//     }}
//     btn.addEventListener('click',load_titles)

//     document.body.appendChild(btn);}})



/////q2/////
// async function load(){
//     let res=await fetch ("https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products")
//     let j=await res.json();
//     for(i=0; i<j.length; i++){
//     let title=j[i].name;
//     let price=j[i].price;
//     let img=j[i].image;
//     console.log(title);
//     console.log(price);
//     console.log(img);
//     }
// }
// load();