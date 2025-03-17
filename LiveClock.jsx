import React, { useState, useEffect } from 'react';
import './LiveClock.css'; // Import the CSS file

const LiveClock = () => {
    const [time, setTime] = useState(new Date());
    const [isRunning, setIsRunning] = useState(false);
    const [is12Hour, setIs12Hour] = useState(true);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(new Date());
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const toggleClock = () => {
        setIsRunning(prev => !prev);
    };

    const toggleFormat = () => {
        setIs12Hour(prev => !prev);
    };

    const formatTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amPm = '';

        if (is12Hour) {
            amPm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
        }

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${is12Hour ? amPm : ''}`;
    };

    return (
        <div className="live-clock-container">
            <h1 className="text-xl font-bold uppercase tracking-wide">Live Digital Clock</h1>
            <div className="clock">{formatTime(time)}</div>
            <div className="button-container">
                <button onClick={toggleClock} disabled={isRunning} className="button start-button">
                    Start
                </button>
                <button onClick={toggleClock} disabled={!isRunning} className="button stop-button">
                    Stop
                </button>
                <button onClick={toggleFormat} className="button format-button">
                    {is12Hour ? '24-hour' : '12-hour'}
                </button>
            </div>
        </div>
    );
};

export default LiveClock;
