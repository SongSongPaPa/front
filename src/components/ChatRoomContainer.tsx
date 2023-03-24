import React from "react";
import "./GameRoomContainer.css"
import "./button.css"
import ModalButton from "./Modalbutton";

const ChatRoomContainer = () => {
    return (
        <div className="box">
            <div className="button-container">
                <ModalButton className='lobby-round-button' text="Create Room"/>
            </div>
        </div>
    );
};

export default ChatRoomContainer;