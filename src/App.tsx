import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRoute from "./routes/home-route";
import GameRoute from "./routes/game-route";
import SiteHeader from "./components/site-header";

function App() {
  return (
      <BrowserRouter>
        <SiteHeader/>
        <main className="container">
            <Routes>
                <Route path="/" element={<HomeRoute/>} />
                <Route path="game" element={<GameRoute/>} />
           </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App
