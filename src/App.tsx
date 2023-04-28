import React from "react";
import "./App.css";
import LoginPage from "./0_presentation/pages/LoginPage";
import LobbyPage from "./0_presentation/pages/LobbyPage";
import GameWaitPage from "./0_presentation/pages/GameWaitPage";
import ChatPage from "./0_presentation/pages/ChatPage";
import SignupPage from "./0_presentation/pages/SignupPage";
import TwoFactorPage from "./0_presentation/pages/TwoFactorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalModal from "./0_presentation/components/modals/GlobalModal";

function App() {
  return (
    <BrowserRouter>
      <GlobalModal />
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/lobby" element={<LobbyPage />} />
          <Route path="/game-wait" element={<GameWaitPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/twofactor" element={<TwoFactorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
