import { useState } from "react";

// J'ai préféré suivre le cours que de continué à recopier ton code sans comprendre. Maintenant c'est clair !


export const Game = () => {

    const[visible, setVisible] = useState(false);
    function gridDisplayAndGameInit() {
        setVisible(true);
    }

    const Grid = () => {
        return <div id="grid-container"> 
         <div id="grid-element-0"></div>
         <div id="grid-element-1"></div>
         <div id="grid-element-2"></div>
         <div id="grid-element-3"></div>
         <div id="grid-element-4"></div>
         <div id="grid-element-5"></div>
         <div id="grid-element-6"></div>
         <div id="grid-element-7"></div>
         <div id="grid-element-8"></div>
        </div>
    }

    return <div>
        <button id="grid-toogle" onClick={() => gridDisplayAndGameInit()}>Start game</button>
        {visible && <Grid />}
    </div>;
};
