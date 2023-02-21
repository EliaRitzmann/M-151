import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Admin } from "./pages/Admin";
import { PlayerLogin } from "./pages/PlayerLogin";
import { Game } from "./pages/Game";
import { AdminLogin } from "./pages/AdminLogin";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Game></Game>}></Route>
    <Route path="/playerLogin" element={<PlayerLogin></PlayerLogin>}></Route>
    <Route path="/adminLogin" element={<AdminLogin></AdminLogin>}></Route>
    <Route path="/admin" element={<Admin></Admin>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
