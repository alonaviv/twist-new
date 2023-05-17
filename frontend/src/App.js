import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [currentTime, setCurrentTime] = useState(0);
    const [currentDate, setCurrentDate] = useState(0);
    const [currentObj, setCurrentObj] = useState(0);
    useEffect(() => {
        fetch('api/open_mic/current_time').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
            setCurrentDate(data.date);
            setCurrentObj(data.obj)
        });
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <p>The date is {currentDate} and the time is {currentTime}. Obj: {currentObj}</p> <br />

            </header>
        </div>
    );
}

export default App;
console.log("I would like to see this ")
