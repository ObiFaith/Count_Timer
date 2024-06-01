import { useEffect } from "react"

const TimerInput = ({hours, seconds, minutes, setHours, setMinutes, setSeconds}) => {
  const handleInput = e => {
    if (e.target.name === 'seconds' && hours.length < 3) setSeconds(e.target.value)
    else if (e.target.name === 'minutes' && minutes.length < 3) setMinutes(e.target.value)
    else if (e.target.name === 'hours' && hours.length < 3) setHours(e.target.value)    
  }

  useEffect(() => {
    if (hours.length === 1) setHours(hours = '0' + hours)
    
  }, [hours, minutes, seconds])

  return (
    <div className="bg-brown-200 w-48 h-48 flex items-center mx-auto justify-center gap-2 mt-8 mb-4 *:placeholder:underline *:placeholder:underline-offset-4 rounded-full text-yellow-200">
      <input onChange={handleInput} className="bg-transparent text-3xl focus:outline-none w-2ch" inputMode="numeric" type="number" placeholder={hours ? hours : '00'} name="hours"/>          
      <span className="text-lg font-bold">:</span>
      <input onChange={handleInput} className="bg-transparent text-3xl focus:outline-none w-2ch" inputMode="numeric" type="number" placeholder={minutes ? minutes : '00'} name="minutes"/>
      <span className="text-lg font-bold">:</span>
      <input onChange={handleInput} className="bg-transparent text-3xl focus:outline-none w-2ch" inputMode="numeric" type="number" placeholder={seconds ? seconds : '00'} name="seconds"/>
    </div>
  )
}

export default TimerInput