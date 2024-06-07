const form=document.querySelector('form');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const height=document.querySelector('#height').value;
    const weight=document.querySelector('#weight').value;

    const result=document.querySelector('#result');

    const bmi=(weight/ ((height*height)/10000)).toFixed(2);
    
    result.innerHTML=`<span> BMI = ${bmi} kg/m2</span>
    <br>`
    
    if(bmi<18.6){
        const span= document.createElement('span');
        span.appendChild(document.createTextNode('Under Weight'))
        result.appendChild(span); 
    }else if(bmi>18.6 && bmi<24.9){
        const span= document.createElement('span');
        span.appendChild(document.createTextNode('Normal Weight'))
        result.appendChild(span); 
       
    }else{
        const span= document.createElement('span');
        span.appendChild(document.createTextNode('OverWeight'))
        result.appendChild(span);  
        
    }
})