//DOM
let div = document.querySelector('.main-container');

let span = document.createElement('span');
span.style.fontSize = "5rem";
span.style.fontWeight = "bold";
span.style.padding = "25px 50px";
span.style.border = "5px solid black";
span.style.borderRadius = "1000px"

setInterval(function () {
    let date = new Date();
    span.innerText = date.toLocaleTimeString();
    span.style.backgroundImage = "url('bg.jpg')";
    span.style.backgroundSize = "cover";
    span.style.color = "transparent";
    span.style.backgroundClip = "text";
    span.style.maskImage = "linear-gradient(black, black)";

}, 1000);

div.appendChild(span);




/* <h1 class="text">Hello world</h1>
.text {
    background-image: url(bg.jpg);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
} */