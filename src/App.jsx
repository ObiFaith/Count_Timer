import { useState } from "react"
import {TimerControls, TimerDisplay, TimerInput} from "."

export default function App() {
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')
  const [isTimer, setIsTimer] =  useState(false) 
  const [totalSec, setTotalSec] = useState(0)

  return (
    <div className="bg-yellow-100 grid place-items-center min-h-screen text-center">
      <div className="bg-gradient-to-b from-brown-600 to-brown-500 text-white py-8 px-4 rounded-xl min-w-80">
        <h2 className="text-yellow-400 uppercase font-bold text-xl">Re. wind</h2>
        <TimerInput isTimer={isTimer} setHours={setHours} setMinutes={setMinutes} setSeconds={setSeconds} hours={hours} minutes={minutes} seconds={seconds} />
        <TimerControls isTimer={isTimer} setIsTimer={setIsTimer} />
        <TimerDisplay totalSec={totalSec} setTotalSec={setTotalSec} isTimer={isTimer} hours={hours} minutes={minutes} seconds={seconds} />
      </div>
    </div>
  )
}