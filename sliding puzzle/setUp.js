const canvas = document.getElementById("canvas"),
    makePuzzleButton = document.getElementById("makePuzzleButton"),
    ctx = canvas.getContext("2d");

canvas.width = window.innerHeight - 1;
canvas.height = window.innerHeight - 1;

makePuzzleButton.style.left = window.innerWidth - 20 - makePuzzleButton.scrollWidth + "px";
makePuzzleButton.style.bottom = window.innerHeight - 7 - makePuzzleButton.scrollHeight + "px";
 
canvas.style.left = window.innerWidth / 2 - canvas.width / 2 - makePuzzleButton.scrollWidth + "px";

let squaresValuesSizes = {};


