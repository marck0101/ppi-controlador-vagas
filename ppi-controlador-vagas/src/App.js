import logo from './logo.svg';
import './App.css';
import ChartBar from './component/Charts';
import ChartLine from './react-chart';
// import Chart from './component/Charts';
// import PersistentDrawerLeft from './component/teste1/Drawer';

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
