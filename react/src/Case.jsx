import { useState } from "react";

export const Case = ({ index, caseIsClicked, gameStep }) => {
    const [clicked, setClicked] = useState(false);
    const [className, setClassName] = useState("");

    function updateGameAndMove() {
        setClicked(true);
        const className = caseIsClicked(index);
        if (className) {
            setClassName(className);
        }
    }

    return (
        <div onClick={updateGameAndMove} id={`grid-element-${index}`}>
            {clicked === true && <i className={className}></i>}
        </div>
    );
};