let container = document.getElementById("container"),
    submitInfo = document.getElementById("submitInfo");

container.style.position = "relative";
container.style.bottom = window.innerHeight - container.clientHeight + "px"
container.style.left = window.innerWidth / 2 - 110 + "px";

const getBlankGrid = (type) => {
    let grid = [];
        
    for (let row = 0; row < dimensions; row++){ 
        grid[row] = [];

        for (let col = 0; col < dimensions; col++) {
            if(type === "squares"){
                grid[row][col] = new Square(squaresSize * col, squaresSize * row, squaresSize);
            }
            else {
                grid[row][col] = 0;
            }
        }               
    }

    return grid;
},

random = (min, max) => {
    return (Math.random() * (max - min) + min) | 0;
},
checkForWin = () => {
    for (let row = 0; row < allRows.length; row++) {
        for (let col = 0; col < allRows[row].length; col++) {
            if(allRows[row][col] === 2048){
                let answer = confirm("Congratulations you win! Do you want to continue playing?");

                if(!answer){
                    scoreContext.clearRect(0, 0, scoreCanvas.width, scoreCanvas.height);
                    gameContext.drawImage(winImage, 0, 0, gameCanvas.width, gameCanvas.height);

                    isPlayerLeft = true;
                }

                shouldCheckWinning = false;
            }
        }        
    }
}, 

stopGame = () => {
    let answer = confirm("You die! Do you want to play again?")

    if(answer){
        scoreContext.clearRect(0, 0, scoreCanvas.width, scoreCanvas.height);
        
        score = 0;

        startGame();        
        fetchAllColumns();
        updateScoreInformation();
    }
    else {        
        scoreContext.clearRect(0, 0, scoreCanvas.width, scoreCanvas.height);
        gameContext.drawImage(byeImage, 0, 0, gameCanvas.width, gameCanvas.height);

        isPlayerLeft = true;
    }
},

clickAnimation = (button) => {
    if(!button.style.bottom){
        button.style.position = "relative";
        button.style.bottom = "0px";
    }
    button.style.bottom = parseFloat(button.style.bottom) - 5 + "px";

    setTimeout(() => {
        button.style.bottom = parseFloat(button.style.bottom) + 5 + "px";
    }, 50);
},

init = () => {         
    switch (dimensions){
        case 2:
            squaresValuesSizes = {
                1 : 70,
                2 : 60,
                3 : 50,
                4 : 40
            };
            break;
        case 3:
        case 4:
            squaresValuesSizes = {
                1 : 55,
                2 : 45,
                3 : 40,
                4 : 30
            };          

            break;
        case 5:
            squaresValuesSizes = {
                1 : 50,
                2 : 40,
                3 : 35,
                4 : 25
            };
            break;
        case 6:
        case 7:
            squaresValuesSizes = {
                1 : 45,
                2 : 35,
                3 : 30,
                4 : 25
            };
            break;
        case 8:
            squaresValuesSizes = {
                1 : 40,
                2 : 30,
                3 : 25,
                4 : 20
            };          
            break;        
    }
};
