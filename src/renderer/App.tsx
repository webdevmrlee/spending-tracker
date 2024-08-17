import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="home">
      <h1>Spend Tracker</h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
