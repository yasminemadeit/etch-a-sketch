const mainContainer = document.querySelector("#main-container");
const containerWidth = 600;
const containerHeight = 600;
const btn = document.querySelector("#btn");

let userInput;

function changeColor(){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`; 

        return rgb;

}

btn.addEventListener("click", function(){
    do {
        userInput = prompt("Please enter an integer between 1 and 100:)");
        gridSize = parseInt(userInput);
    } while (isNaN(userInput)|| userInput>100 || userInput<1);
    mainContainer.innerHTML= "";
    newGrid(gridSize);



});
// mainContainer.addEventListener("mouseenter", function (e){
//     if (e.target!==mainContainer){
//         const cell = e.target;
//         cell.style.background = "black";
//        // cell.style.opacity= Number(this.style.opacity) + 0.1;
//     }
// });

// function handleMouseEnter(e){
//     const cell = e.target;
//     cell.style.backgroundColor = 'grey';
//     this.style.opacity= Number(this.style.opacity) + 0.1;
// }


function newGrid(gridSize){

   


   
    mainContainer.style.width = containerWidth + "px";
    mainContainer.style.height = containerHeight +  "px";
    mainContainer.style.display = "flex";
    mainContainer.style.flexWrap = "wrap";
    let relativeWidth= containerWidth/gridSize + "px";
    let relativeHeight =  (containerHeight/gridSize) + "px";

    //Create Grid
    for (let i = 0; i < gridSize*gridSize; i++){
        let gridDiv = document.createElement("div");
        gridDiv.id = "div-" + i;
        gridDiv.style.background = "white";
        gridDiv.style.border = "solid black 1px";
        gridDiv.style.height = relativeHeight;
        gridDiv.style.width = relativeWidth;
        gridDiv.style.boxSizing = "border-box";
        

        gridDiv.addEventListener("mouseenter", function(){
            this.style.background = changeColor();
            //this.style.opacity= Number(this.style.opacity) + 0.1;
        });

       // gridDiv.addEventListener("mouseenter", handleMouseEnter);



        mainContainer.appendChild(gridDiv);
        
    }



    

}

