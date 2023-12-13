import { Character } from "./characters/Character.js";
import { Background } from "./ui/basic-utils.js";


const background = new Background();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// vlastnosti objektu - atributy




const keys = {};
//   Space: true
//   Space: false

document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});

//hlavni smycka hry
const gameLoop = () => {

    //resizeCanvas
    resizeCanvas();

    //clearCanvas
    clearCanvas();

    //update
    update();

    //render
    render()

    //fps
    getFps();

    window.requestAnimationFrame(gameLoop);
}

const resizeCanvas = () => {
    canvas.width = 1280;
    canvas.height = 720;
};
const clearCanvas = () => {
    background.draw(ctx);
};
const update = () => {};
const render = () => {};
const getFps = () => {};


//Kdyz se nam stranka nacte, spustime fci
window.onload = () => {

    window.requestAnimationFrame(gameLoop);
}