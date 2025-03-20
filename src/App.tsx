import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./features/user/pages/HomePage";
import MovieDetails from "./features/user/components/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
