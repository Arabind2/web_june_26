//----using getElementByTagName-------->

// const img=document.getElementsByTagName('img');
// console.log(img);

// img[0].src="https://ddindia.co.in/wp-content/uploads/2025/05/GettyImages-2191059463.jpg"

// let urls=["https://static.toiimg.com/thumb/msid-125814433,imgsize-58344,width-400,resizemode-4/virat-rohit2-0712-bcci.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nv-al4Q1qCcPnaBkGqW5zcyOzRgaLkX_Kw6yvLvvH3hPqG-AFljY5mk&s=10",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhu4MJuo56hsb66EyTwdpdKsClgtFTsqTjEcP_iY5jT48Qr3rp-rkFIRp&s=10"
// ]

// const view=urls.forEach((value,idx)=>{
//     img[idx].src=urls[idx];
// })
// console.log(view);

//======================using getElementsByClassName=============================>
// let urls2=["https://static.toiimg.com/thumb/msid-125814433,imgsize-58344,width-400,resizemode-4/virat-rohit2-0712-bcci.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nv-al4Q1qCcPnaBkGqW5zcyOzRgaLkX_Kw6yvLvvH3hPqG-AFljY5mk&s=10",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhu4MJuo56hsb66EyTwdpdKsClgtFTsqTjEcP_iY5jT48Qr3rp-rkFIRp&s=10"
// ]
//     const img2=document.getElementsByClassName('css-images')
// console.log(img2);

// ;

// for (let idx = 0; idx < img2.length; idx++) {
//     img2[idx].src = urls2[idx];
// }

//----------------->using getElementById-------------------->

//     const img3=document.getElementById('first-images')
// img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhu4MJuo56hsb66EyTwdpdKsClgtFTsqTjEcP_iY5jT48Qr3rp-rkFIRp&s=10";

//----------------using querySelector-----------------------------------

// const img4=document.querySelector('#first-images')
// img4.src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nv-al4Q1qCcPnaBkGqW5zcyOzRgaLkX_Kw6yvLvvH3hPqG-AFljY5mk&s=10";

//-----------------using querySelectorAll-------------->

// const images=document.querySelectorAll('.css-images')

// console.log("2nd image", images[1]);

//----------------------------------------------->
//-----------> append, appendChild,prepend--------->

const first=document.querySelector(".container");
const Second=document.querySelector("h2");
const third=document.querySelector("h3")
const card1=document.querySelector(".card");
// // console.log(first.append(Second,"Hello, I am Arabind."))
// console.log(first.append(Second,third));

// console.log(first.appendChild(third,Second));  //it only takes the first one.

console.log(card1.prepend(Second,third));
// console.log(third.remove());






