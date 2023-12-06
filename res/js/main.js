const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1280, 720)
};
const update = () => {};
const render = () => {};
const getFps = () => {};


//Kdyz se nam stranka nacte, spustime fci
window.onload = () => {

    window.requestAnimationFrame(gameLoop);
}