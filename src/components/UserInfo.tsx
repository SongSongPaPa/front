import React, {useState} from "react";
import ToggleButton from "./ToggleButton";
import './UserInfo.css';

const UserInfo = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div className="user-box">
            <div className="user-profile"></div>
                <ToggleButton
                    selected={selected}
                    toggleSelected={ () => {
                        setSelected(!selected);
                    }}
                    onText="Friend"
                    offText="All"
                />
        </div>
    );
}

export default UserInfo;