import React from "react";
import './Map.css'
import {Application} from "pixi.js"

let app;

window.onload = function() {
    app = new Application(
        {
            width: 800,
            height: 600,
        }
    );
    
    document.querySelector("#gameDiv").appendChild(app.view)
    app.stage.interactive = true;
    // document.querySelector("#gameDiv").addEventListener("pointerdown", firebullet);
}
function Map() {
    return (
        <div id="gameDiv">
        </div>
    )
}


export default Map