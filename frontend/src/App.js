import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [currentTime, setCurrentTime] = useState(0);
    const [currentDate, setCurrentDate] = useState(0);
    useEffect(() => {
        fetch('/open_mic/current_time').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
            setCurrentDate(data.date)
        });
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <p>The date is {currentDate} and the time is {currentTime}.</p> <br />

            </header>
        </div>
    );
}

export default App;
