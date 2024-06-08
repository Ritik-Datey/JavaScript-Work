// //Normal apporch
// document.getElementById('blackGoku').onclick = function() {
//     alert("Goku Wallpaper with black background and this is done by normal apporach");
// }

// // Best way .. it give us more fuctionality ... best apporach...
// // document.getElementById("audiRs7").addEventListener("click", function()
// // {
// //     alert("Audi RS7 mansory Addition and this is done by addEventListener apporach");
// // })

// //attachEvent()
// //jQuery - on....

// // Events Propogation Example

// //Here we added a alert statement in img tag..in <li>
// document.getElementById("audiRs7").addEventListener("click", function()
// {
//     alert("Audi RS7 mansory Addition <li> ");
// })

// //here we are alerting all images tags
// document.getElementById("images").addEventListener("click", function()
// {
//     alert("Images tag Clicked <ul>");
// },true)

// // Now in above events  first inner element is alerting then outer
// //<li> then <ul>... bottom to top...

// // now if we clicked on goku blue then first outer element is alert then inner if propogation is true in outer tag
// document.getElementById('blueGoku').addEventListener('click',function()
// {
//     alert("Blue Goku");
// },false)

//Remove Clicked img....
document.querySelector('#images').addEventListener('click',function(e){
//    let removeIt=e.target.parentNode;
//     removeIt.remove();
    // in above e.target select child node and e.target.parentNode select parent node ...
    if(e.target.tagName === 'IMG')
        {
            let removeIt=e.target.parentNode;
            removeIt.remove()
        }
})