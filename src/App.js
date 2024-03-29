import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Header/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
