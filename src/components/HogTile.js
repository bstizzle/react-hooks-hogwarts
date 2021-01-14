import React, {useState} from "react";
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

function HogTile({hog}){
    const imgs = [augustus_gloop, babe, bailey, cherub, galaxy_note, leggo_my_eggo,
        peppa, piggy_smalls, piglet, porkchop, trouble, truffle_shuffle]

    const hogImg = imgs.filter((img) => {
        let firstName = hog.name.split(" ")[0].toLowerCase();
        return img.includes(firstName)
    })

    const [isClicked, setIsClicked] = useState(false)

    function displayDeets(){
        setIsClicked(!isClicked)
    }

    const imgTag = <img width="100%" height="80%" src={hogImg} alt={hog.name}></img>;

    const details = <ul className="hoggyText">
                        <li>Specialty: {hog.specialty}</li>
                        <li>Weight: {hog.weight}</li>
                        <li>{hog.greased ? 'Greased' : 'Ungreased'}</li>
                        <li className="achievementText">Highest Medal: {hog['highest medal achieved']}</li>
                    </ul>;

    return(
        <div className="ui eight wide column">
            <div onClick={displayDeets} className="pigTile maxPigTile minPigTile">
                <h3>{hog.name}</h3>
                {isClicked ? details : imgTag}
            </div>
        </div>
    )
}

export default HogTile;