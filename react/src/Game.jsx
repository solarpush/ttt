import { useState } from "react";

export const Game = () => {
const [visible, setVisible] = useState(false);
function gridDisplayGameInit() {
    setVisible(true)
};

const Grid = () => { return <div id="grid-container">
    <div id="grid-element-0"></div>
    <div id="grid-element-1"></div>
    <div id="grid-element-2"></div>
    <div id="grid-element-3"></div>
    <div id="grid-element-4"></div>
    <div id="grid-element-5"></div>
    <div id="grid-element-6"></div>
    <div id="grid-element-7"></div>
    <div id="grid-element-8"></div>
    </div>; }

    return <div>
        <button id="grid-toogle" onClick={() => gridDisplayGameInit()}>
            Start Game
        </button>
        {visible && < Grid/> }
        
    </div>
};