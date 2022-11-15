import logo from './logo.svg';
import './App.css';
import ChartBar from './component/arquivados/Charts';
import ChartLine from './component/react-chart';
// import Chart from './component/Charts';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <ChartBar />
        <ChartLine/>
      </header>
    </div>
  );
}

export default App;
