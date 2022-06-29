import  PIXI from "pixi.js"

 // _____Canvas Properties____ 
const Application = PIXI.Application;
const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true 
}); 


app.renderer.backgroundColor = 0x000000; 

app.renderer.resize(window.innerWidth, window.innerHeight)

app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);




