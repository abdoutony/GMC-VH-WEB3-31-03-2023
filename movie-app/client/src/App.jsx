import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages";
import MoviesPage from "./pages/movies";
import NotFoundPage from "./pages/404";
import CounterPage from "./pages/counter";
import CounterPage2 from "./pages/counter2";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/counter2" element={<CounterPage2 />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
