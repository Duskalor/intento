import { Link, Routes, Route } from "react-router-dom";
import H from "./H";
import Intento1 from "./Intento1";
import Intento2 from "./Intento2";

function App() {
  return (
    <div>
      <h1>Hola a todos PERRAS</h1>
      <Link to="/"> INICIO </Link>
      <Link to="/intento1"> intento1 </Link>
      <Link to="/intento2"> intento2 </Link>

      <Routes>
        <Route path="/" element={<H />}></Route>
        <Route path="/intento1" element={<Intento1 />} />
        <Route path="/intento2" element={<Intento2 />} />
      </Routes>
    </div>
  );
}

export default App;
