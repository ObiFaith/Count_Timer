import {TimerControls, TimerDisplay, TimerInput} from "."

export default function App() {
  return (
    <div className="bg-yellow-100 grid place-items-center min-h-screen text-center">
      <div className="bg-brown-600 text-white py-8 px-4 rounded-xl min-w-80">
        <h2 className="text-yellow-400 uppercase font-bold text-xl">Re. wind</h2>
        <div className="bg-brown-200 w-48 h-48 flex items-center mx-auto justify-center gap-2 my-6 rounded-full text-yellow-200">
          <input className="bg-transparent text-2xl focus:outline-none w-2ch" inputMode="numeric" type="number" placeholder='00' name="minutes"/>          
          <span className="text-lg font-bold">:</span>
          <input className="bg-transparent text-2xl focus:outline-none w-2ch" inputMode="numeric" type="number" placeholder='00' name="seconds"/>
        </div>
      </div>
    </div>
  )
}