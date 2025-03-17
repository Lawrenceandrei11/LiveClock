import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LiveClock from './component/LiveClock'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <LiveClock />
            </div>
        </>
    )
}

export default App
