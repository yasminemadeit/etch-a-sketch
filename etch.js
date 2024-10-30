const mainContainer = document.querySelector("#main-container");
let gridHeight= 16;
let gridWidth =16;
const containerWidth = 960;
const containerHeight = 960;

mainContainer.style.width = containerWidth + "px";
mainContainer.style.height = containerHeight +  "px";
mainContainer.style.display = "flex";
mainContainer.style.flexWrap = "wrap";


let relativeWidth= containerWidth/gridWidth + "px";
let relativeHeight =  (containerHeight/gridHeight) + "px";

//Create Grid
for (let i = 0; i < gridHeight; i++){
    for (let j=0; j<gridWidth; j++){
    let gridDiv = document.createElement("div");
    gridDiv.id = "div-" + i + "-" + j;
    gridDiv.style.background = "grey";
    gridDiv.style.border = "solid,black,1px";
    gridDiv.style.height = relativeHeight;
    gridDiv.style.width = relativeWidth;
    gridDiv.style.boxSizing = "border-box";

    gridDiv.addEventListener("mouseover", function(){
        this.style.background = "black";
    });


    mainContainer.appendChild(gridDiv);
    }
}



