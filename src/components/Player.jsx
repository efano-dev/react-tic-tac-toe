import { useState } from "react";
import editIcon from "../assets/edit-icon.svg";
import saveIcon from "../assets/save-icon.svg";

function Player({ playerInitialName, playerSymbol, onPlayerUpdate, isActivePlayer }) {
    const [playerName, setPlayerName] = useState(playerInitialName);
    const [isEditing, setIsEditing] = useState(false);

    function changePlayerName(event) {
        setPlayerName(event.target.value);
    }

    function editPlayerName() {
        if (isEditing) {
            onPlayerUpdate(playerSymbol, playerName);
        }

        setIsEditing((prevIsEditing) => !prevIsEditing);
    }

    return (
        <div className={`input-group ${isActivePlayer ? "active" : ""}`}>
            <input type="text" className="input-group__input" value={playerName} onChange={changePlayerName} disabled={!isEditing} />
            <div className="input-group__identifier">{playerSymbol}</div>
            <button type="button" className="input-group__button" onClick={editPlayerName}>
                <img src={!isEditing ? editIcon : saveIcon} alt={!isEditing ? "Edit Icon" : "Save Icon"} />
            </button>
        </div>
    );
}

export default Player;
