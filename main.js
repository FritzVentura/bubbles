"use strict";

const divs = document.querySelectorAll("#app div");

divs.forEach(function(div){
 //   console.log("")
 // div.style.transform = `translate(50vw, 50vh)`;

    div.addEventListener("mouseenter", function(){
        div.style.transform=`translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
        //Der er flere måde der kan defineres en farve #FF1234, rgb(0, 123, 345), hsl(350, 12%, 12%)
        div.style.backgroundColor = `hsl(${Math.random()*360}, ${Math.random()*100}%, 50%)`;

    })


})