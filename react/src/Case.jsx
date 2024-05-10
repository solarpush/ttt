import { useEffect, useState } from "react";

export const Case = ({ index, caseIsClicked, winner }) => {
    const [clicked, setClicked] = useState(false);
    const [className, setClassName] = useState("");
    const [bgRed, setBgRed] = useState(false);

    useEffect(() => {
        if (winner) {
            const isWinCase = winner.result.some((v) => v === index);
            if (isWinCase) {
                setBgRed(true);
            }
        }
    }, [winner]);

    function updateGameAndMove() {
        setClicked(true);
        const className = caseIsClicked(index);
        if (className) {
            setClassName(className);
        }
    }

    return (
        <div
            onClick={updateGameAndMove}
            id={`grid-element-${index}`}
            style={{ backgroundColor: bgRed ? "red" : "gray" }}
        >
            {clicked === true && <i className={className}></i>}
        </div>
    );
};