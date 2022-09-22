
import './App.css';
import Device from './component/Device/Device';
import Watch from './component/Watch/Watch';

function App() {
  return (
    <div className="App">
     <Device name='i-phone' price='75000'></Device>
     <Watch></Watch>

    </div>
  );
}

export default App;
