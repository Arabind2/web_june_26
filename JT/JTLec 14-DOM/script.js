//================getElementsByTagName================

// const images=document.getElementsByTagName('img')
// console.log("////", images);


// console.log(images[0]);
//  console.dir(images[0])

// console.log(images[0].src);
// images[0].src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="

 // let urls=["https://png.pngtree.com/thumb_back/fh260/background/20240518/pngtree-nature-beautiful-background-hd-image_15796886.jpg","https://static.vecteezy.com/system/resources/thumbnails/057/780/649/small/serene-green-valley-landscape-viewed-through-majestic-tree-branches-photo.jpeg","https://static.vecteezy.com/system/resources/thumbnails/066/582/539/small/nature-background-serene-sunset-over-rolling-green-wheat-fields-agricultural-landscape-free-photo.jpg"]

// for (let index = 0; index < images.length; index++) {
//     images[index].src=urls[index]
    
// }
//=============================================
//------->using foreach method
// urls.forEach((value,idx) =>{
//     images[idx].src=value;
// });

//------------------------------getElementsByClassName----------------->

// const imagesByClassName=document.getElementsByClassName('css-images')
// console.log("////", imagesByClassName);

//-----------------------------getElementById------------------->

// const firstImageById=document.getElementById('first-images')
// console.log("////", firstImageById);
// console.dir(firstImageById);

//---------------------------querySelector---------------->

//const firstimage=document.querySelector('#first-images')
// console.log("//////", firstimage);

//--------------------------querySelectorAll-------------->

// const images=document.querySelectorAll('.css-images')
// console.log("//////", images);
// console.log("2nd image", images[1]);

//--------------------------------------

//  console.log(document.querySelector("[username]"));

// console.log(document.querySelector("[username=admin]"));

//  const h2= document.querySelector('[username=admin]')
//  console.log(h2.getAttribute('username'));   //admin

// console.log(document.querySelector("#first-images").getAttribute('style'))
//-----------------------------

// console.log(document.querySelector("#first-images").setAttribute("src","https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="));

//---------------------
// document.querySelector("body > h2:nth-child(3)").setAttribute("style", "color : red")

// document.querySelector("body > h2:nth-child(3)").setAttribute("style", "background-color : greenyellow")

//-----------------------

// document.querySelector(document.querySelector("body > h2:nth-child(3)").classList.add("red"));

// document.querySelector(document.querySelector("body > h2:nth-child(3)").classList.add("bgGreenYellow"));

//-------------------------

//  document.querySelector(document.querySelector("body > h2:nth-child(3)").classList.remove("bgGreenYellow"));
//------------------------

//  document.querySelector(document.querySelector("body > h2:nth-child(3)").classList.toggle("bgGreenYellow"));

//  document.querySelector(document.querySelector("body > h2:nth-child(3)").classList.toggle("bgGreenYellow"));
//---------------------------

//  document.querySelector(document.querySelector("body > h2:nth-child(3)").removeAttribute("class"));

//----------------

// const firstLink=document.querySelector("body > p:nth-child(5) > a:nth-child(2)").nextElementSibling
// console.log(firstLink);

// const firstLink2=document.querySelector("body > p:nth-child(5) > a:nth-child(2)").nextSibling
// console.log(firstLink2);

// const PreviousLink=document.querySelector("body > p:nth-child(5) > a:nth-child(2)").previousElementSibling
// console.log(PreviousLink);

// const PreviousLink2=document.querySelector("body > p:nth-child(5) > a:nth-child(2)").previousSibling
// console.log(PreviousLink2);







