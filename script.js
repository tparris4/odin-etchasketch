
function squareCreate(input){
    for(let i = 0; i < input * input; i++){
            const divsq = document.createElement('div');
            divsq.classList.add('divsq');
            container.appendChild(divsq);
            container.style.setProperty('.divsq', divsq);
            // const gridSize = document.querySelector('.container');
            // const size = window.getComputedStyle(gridSize);
            divsq.style.width = container.getPropertyValue('width') / input - 0.25 + "px";
            divsq.style.height = container.getPropertyValue('height') / input - 0.25 + "px";

            divsq.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "black";
            });
    };
    
}

function removeSq(){
    const sq = document.querySelectorAll('.divsq');
    for (const elem of sq){
        elem.parentNode.removeChild(elem);
    }
    
}




const container = document.querySelector('.container');
const btnReset = document.querySelector('.reset');

squareCreate(16);

btnReset.addEventListener("click", () => {
    removeSq();
    let input = prompt("How many squares do you want? Max: 64 squares, Min: 16");
    if(input < 64 && input > 3){
    squareCreate(input);
    }
})

