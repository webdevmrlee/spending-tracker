import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
import MyCalendar from './components/my-calendar';

function Home() {
  return (
    <>
      <h1>Spend Tracker</h1>
      <MyCalendar />
    </>
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
