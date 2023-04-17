import { Routes, Route } from 'react-router-dom';
import './App.css';
// import { Nav } from './components/Nav/Nav';
import PhotoCollection from './components/PhotoCollection/PhotoCollection';
import Count from './components/Products/Count';
import { RotateBand } from './components/RotateBand/RotateBand';
import { TrafficLight } from './components/TrafficLight/TrafficLight';
import { useEffect, useState } from 'react';
import { Home } from './components/Home/Home';
import Products from './components/Products/Products';
import Err from './components/Error/Err';
import { Contact } from './components/Contact/Contact';
import Header from './components/Header/Header';


function App() {
    const [photo, setPhoto] = useState([]);
    const [winSize, setWinSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const handleWinResize = () => {
            setWinSize([window.innerWidth, window.innerHeight]);
        }
            window.addEventListener('resize', handleWinResize);

            return () => {
                window.removeEventListener('resize', handleWinResize)
            
        }
    })

    useEffect(() => {
        fetch(`http://localhost:3000/album.json`)
            .then(res => res.json())
            .then(data => {
                setPhoto(data.album)
            })
    }, []);

    const onPhotoDelete = (id) => {
        setPhoto(state => state.filter(x => x.id !== id));
    }

    const onPhotoSelect = (id) => {
        setPhoto(state => state.map(x => ({ ...x, selected: x.id === id })));
    }

    return (
        <div className="App">
            <Header winSize={winSize} />
            <Routes>
                <Route patg='*' element={<Err />}></Route>
                <Route path='/' element={<Home />}></Route>
                <Route path='/trafficLight' element={<TrafficLight />}></Route>
                <Route path='/rotateBand' element={<RotateBand />}></Route>
                <Route path='/products' element={<Products />}></Route>
                <Route path='/photoCollection' element={<PhotoCollection photo={photo} onPhotoDelete={onPhotoDelete} onPhotoSelect={onPhotoSelect}/>}></Route>
                <Route path='/count' element={<Count start={0} />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        </div>
    );
}

export default App;
