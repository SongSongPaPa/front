import React from 'react';
import ChatRoomContainer from '../components/ChatRoomContainer';
import GameRoomContainer from '../components/GameRoomContainer';
import './LobbyPage.css';

function LobbyPage() {
    return (
        <div className='container'>
            <GameRoomContainer/>
            <ChatRoomContainer/>
        </div>
    );
};

export default LobbyPage;