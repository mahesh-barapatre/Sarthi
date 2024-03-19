import { Routes, Route, BrowserRouter } from "react-router-dom";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";

function App() {
  return (
    <BrowserRouter>
    {/* <div className="App"> */}
      <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
    {/* </div> */}
    </BrowserRouter>
  );
}

export default App;