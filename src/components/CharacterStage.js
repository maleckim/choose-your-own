import React from "react";



const CharacterStage = ({ character, dialogue }) => {
    const { stats, name, selectedBackstory, selectedItem } = character;

    return (
        <div className="main-stage-container">
            <div className="stat-container">
                {Object.entries(stats).map((a, b) => {
                    return <p>{a[0]} : {a[1]}</p>
                })}
            </div>
            <div className="dialogue-container">

            </div>
        </div>
    )
}

export default CharacterStage