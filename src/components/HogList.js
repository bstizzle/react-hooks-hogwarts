import React from "react";
import HogTile from "./HogTile";

function HogList({hogs}) {
    const allHogs = hogs.map((hog) => {
        return <HogTile key={hog.name} hog={hog} />
    })

    return(
        <div className="ui grid container">
            {allHogs}
        </div>
    )
}

export default HogList; 