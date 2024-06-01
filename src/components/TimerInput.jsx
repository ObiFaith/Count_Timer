const TimerInput = ({hours, seconds, minutes}) => {
  return (
    <div className="bg-brown-200 w-48 h-48 flex items-center mx-auto justify-center gap-2 mt-8 mb-4 *:placeholder:text-white rounded-full text-yellow-200">
      <input className="bg-transparent text-3xl focus:outline-none w-2ch" inputMode="numeric" type="number" placeholder={hours} name="minutes"/>          
      <span className="text-lg font-bold">:</span>
      <input className="bg-transparent text-3xl focus:outline-none w-2ch" inputMode="numeric" type="number" placeholder={minutes} name="seconds"/>
      <span className="text-lg font-bold">:</span>
      <input className="bg-transparent text-3xl focus:outline-none w-2ch" inputMode="numeric" type="number" placeholder={seconds} name="seconds"/>
    </div>
  )
}

export default TimerInput