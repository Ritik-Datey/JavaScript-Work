const randomColor =function()
{
    const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let color="#";

    for(let i=0; i < 6; i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
//my Apporach

// document.querySelector('#start').addEventListener('click',function()
// {
//     let stopColorChange = setInterval(function(){
//         const body=document.querySelector('body');
//         let color=randomColor();
//         body.style.backgroundColor=color
//     },1000)

//     document.querySelector('#stop').addEventListener('click', function(){
//         clearInterval(stopColorChange);
//     })

// })

//Method apporach

let stopInterval;

let startColorChange = function(){
    stopInterval=setInterval(changeBGColor,1000);

    function changeBGColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

let stopColorChange = function(){
    clearInterval(stopInterval);
}

document.querySelector("#start").addEventListener('click', startColorChange);
document.querySelector("#stop").addEventListener('click',stopColorChange);

