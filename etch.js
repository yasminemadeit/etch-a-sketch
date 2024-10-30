const mainContainer = document.querySelector("#main-container");
const containerWidth = 960;
const containerHeight = 960;
const btn = document.querySelector("#btn");

let userInput;

btn.addEventListener("click", function(){
    do {
        userInput = prompt("Please enter an integer between 1 and 100:)");
        gridSize = parseInt(userInput);
    } while (isNaN(userInput)|| userInput>100 || userInput<1);
    mainContainer.innerHTML= "";
    newGrid(gridSize);



});


function newGrid(gridSize){


   
    mainContainer.style.width = containerWidth + "px";
    mainContainer.style.height = containerHeight +  "px";
    mainContainer.style.display = "flex";
    mainContainer.style.flexWrap = "wrap";
    let relativeWidth= containerWidth/gridSize + "px";
    let relativeHeight =  (containerHeight/gridSize) + "px";

    //Create Grid
    for (let i = 0; i < gridSize; i++){
        for (let j=0; j<gridSize; j++){
        let gridDiv = document.createElement("div");
        gridDiv.id = "div-" + i + "-" + j;
        gridDiv.style.background = "grey";
        gridDiv.style.border = "solid,black,1px";
        gridDiv.style.height = relativeHeight;
        gridDiv.style.width = relativeWidth;
        gridDiv.style.boxSizing = "border-box";
        gridDiv.style.opacity= 0.1;
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`; 

        gridDiv.addEventListener("mouseover", function(){
            this.style.background = rgb;
            this.style.opacity= Number(this.style.opacity) + 0.1;
        });



        mainContainer.appendChild(gridDiv);
        }
    }



    

}

