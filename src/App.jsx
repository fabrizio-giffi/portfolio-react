import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Fullpage from "./pages/Fullpage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Fullpage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
