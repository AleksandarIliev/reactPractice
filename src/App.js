import './App.css';
import { Nav } from './components/Nav/Nav';
import Count from './components/Products/Count';
import { RotateBand } from './components/RotateBand/RotateBand';
import { TrafficLight } from './components/TrafficLight/TrafficLight';

function App() {
    return (
        <div className="App">
            <Nav /> <br /> <br />
            
            <TrafficLight /> <br /> <br />
            <RotateBand /> <br /> <br />
            <Count start={0}/>
        </div>
    );
}

export default App;
