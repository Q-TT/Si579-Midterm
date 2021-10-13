const clickCountButton = document.querySelector('#problem-3 #click-count');

// write your code here
var click = 0;
clickCountButton.addEventListener("click", ()=>{
    click++;
    clickCountButton.textContent = "You clicked the button " + click + " time" + addS(parseInt(click));
});