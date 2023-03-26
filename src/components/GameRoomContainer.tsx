import React from 'react';
import './GameRoomContainer.css'
import './button.css'
import ModalButton from './Modalbutton';
import GameRoomList from './GameRoomList';

const items = [
  { title: 'Apple', headCount: 1 },
  { title: 'Banana', headCount: 2 },
  { title: 'Orange', headCount: 3 },
];

const GameRoomContainer = () => {
    return (
        <div className="box">
            <div className="button-container">
                <ModalButton className='lobby-round-button' text="Quick Start"/>
                <ModalButton className='lobby-round-button' text="Create Room"/>
            </div>
                <GameRoomList rooms={items}/>
        </div>
    );
};

export default GameRoomContainer;