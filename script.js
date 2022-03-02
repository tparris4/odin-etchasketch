function gridCreate(row, col){
    for(let i = 0; i < row; i++){
        squareCreate(i);
    }
    for(let i = 0; i < col; i++){
        squareCreate(i);
    }
}

function squareCreate(input){
    for(let i = 0; i < input; i++){
            const divsq = document.createElement('div');
            divsq.classList.add('divsq');
            container.appendChild(divsq);
            container.style.setProperty('.divsq', divsq);
            divsq.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "black";
            });
    };
    
}

function removeSq(){
    const sq = document.querySelectorAll('divsq');
    for (const elem of sq){
        elem.remove();
    }
}




const container = document.querySelector('.container');
const btnReset = document.querySelector('.reset');

gridCreate(16, 16);

btnReset.addEventListener("click", () => {
    removeSq();
    let input = prompt("How many squares do you want? Max: 64 squares, Min: 16");
    if(input < 64 && input > 16){
    gridCreate(input, input);
    }
})

