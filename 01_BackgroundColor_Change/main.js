const body=document.querySelector("body");

const buttons=document.querySelectorAll('.button');

buttons.forEach(function(span)
{
    // console.log(span.id);
    // console.log(span.target);
    span.addEventListener('click',function(e) {
        body.style.backgroundColor=span.id;
    })
})
