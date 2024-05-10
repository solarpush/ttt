import { Case } from './Case'

export const Grid = ({ caseIsClicked, winner }) => {
    return (
        <div id='grid-container'>
            {new Array(9).fill().map((_, index) => (
                <Case key={index} index={index} caseIsClicked={caseIsClicked} winner={winner}/>
            ))}
        </div>
    )
}
