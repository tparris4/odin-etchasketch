function gridCreate(row, col){
    container.style.setProperty('.divsq', row);
    container.style.setProperty('.divsq', col);
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
            divsq.addEventListener('mouseover', (e) => {
                e.target.style.color = "black";
            })
    }
    
}

function removeSq(){
    const sq = document.querySelectorAll('div.divsq');
    for (const elem of sq){
        elem.remove();
    }
}

btnReset.addEventListener("click", () => {

    let input = prompt("How many squares do you want? Max: 100 squares, Min: 4");
    if(input < 64 && input > 16){
    gridCreate(input, input);
    }
})

// document.querySelectorAll('.divsq').forEach(divsq => {
//     divsq.addEventListener('mouseover', (e) => {
//         e.target.style.color = "white";
//     });
// });

const container = document.querySelector('#container');
const btnReset = document.querySelector('reset');

gridCreate(16, 16);