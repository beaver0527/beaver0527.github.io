const images =["background1.jpg","background2.jpg","background3.jpg"];
const randomImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");

bgImage.src =`Img/${randomImage}`;
bgImage.classList.add("absolute");
bgImage.classList.add("bg-imgsize");

document.querySelector("#background-img").appendChild(bgImage);