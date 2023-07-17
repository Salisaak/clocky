import logo from './logo.svg';
import './App.css';
import HourGlass from './components/hourGlass/hourGlass';
import CandleClock from './components/candleClock/candleClock';
import FibonClock from './components/fibonClock/fibonClock';

function App() {
  return (
    <div className="App">
      {/* <HourGlass/> */}
      {/* <CandleClock/> */}
      <FibonClock/>
    </div>
  );
}

export default App;
