import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about";
import HomePage from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
