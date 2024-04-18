
let apikey = "adKdG9gJaljK43Me9n1aGJMm7_V6CjtTjM6XZxpVxCU";
let NewKey = "omITTW992nSyGRqLQNVNc6qBUR-SOmkt8WGwaav112w";
let count = 3;
let url =  `https://api.unsplash.com/photos/random/?client_id=${NewKey}&count=${count}`;

// let newKey = "omITTW992nSyGRqLQNVNc6qBUR-SOmkt8WGwaav112w";

let image_Div =  document.getElementById("image_div");

// console.log(dataset);

window.addEventListener("load",fetchData);

function fetchData(){
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        
        // console.log(data);
        Getimage(data);
    })
}

function Getimage(Data){
        
     Data.map((ele)=>{
        console.log(ele.urls.full);
        let Newdiv =  document.createElement("div");

        Newdiv.id = "innerDIv"
        Newdiv.innerHTML = 
        `<img src="${ele.urls.full}">
        `;
        image_Div.appendChild(Newdiv)

     })

}


// Getimage(data);

window.addEventListener("scroll",()=>{
   
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        fetchData();
    }
})