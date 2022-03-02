function squareCreate(input){
    for(let i = 0; i < input; i++){
            const divsq = document.createElement('div');
            divsq.classList.add('divsq');
            container.appendChild(divsq);
        
    }
}

function removeSq(){
    const sq = document.querySelectorAll('div.divsq');
    for (const elem of sq){
        elem.remove();
    }
}

const container = document.querySelector('.container');
const btnReset = document.querySelector('reset');



divsq.addEventListner("mouseenter", (e) => {
    e.target.style.color = "blue";
})


btnReset.addEventListener("click", () => {

    let input = prompt("How many squares do you want? Max: 100 squares, Min: 4");
    if(input < 100 && input > 3){
    squareCreate(input);
    }
    else{
        squareCreate(100);
    }
})

squareCreate(9);