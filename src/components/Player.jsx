import editIcon from "../assets/edit-icon.svg";
import saveIcon from "../assets/save-icon.svg";

function Player() {
    return (
        <div className="input-group">
            <input type="text" className="input-group__input" value="Player"/>
            <button type="button" className="input-group__button">
                <img src={editIcon} alt="Edit Icon" />
            </button>
        </div>
    );
}

export default Player;
