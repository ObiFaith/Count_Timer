const TimerInput = ({setHours, setMinutes, setSeconds, isTimer}) => {  
  const handleInput = e => {
    const input = e.target
    if (input.value.length > 2) input.value = input.slice(0, 2)

    if (input.value >= 60){
      input.value = '';

      if (input.name === 'hours') { setHours('00') }
      else if (input.name === 'minutes') { setMinutes('00') }
      else if (input.name === 'seconds') { setSeconds('00') }
    }
    else{
      const value = input.value.length == 1 ? '0' + input.value : input.value

      if (input.name === 'hours') setHours(value)
      else if (input.name === 'minutes') setMinutes(value)
      else if (input.name === 'seconds') setSeconds(value)
    } 
  }

  return (
    <div className="bg-brown-200 w-48 h-48 flex items-center mx-auto justify-center gap-2 mt-8 mb-4 *:placeholder:underline *:placeholder:underline-offset-4 rounded-full text-yellow-200">
      <input disabled={isTimer} maxLength={2} onChange={handleInput} className={`bg-transparent text-3xl focus:outline-none w-2ch ${isTimer ? 'text-center' : ''}`} inputMode="numeric" type="number" placeholder='00' name="hours"/>          
      <span className="text-lg font-bold">:</span>
      <input disabled={isTimer} maxLength={2} onChange={handleInput} className={`bg-transparent text-3xl focus:outline-none w-2ch ${isTimer ? 'text-center' : ''}`} inputMode="numeric" type="number" placeholder='00' name="minutes"/>
      <span className="text-lg font-bold">:</span>
      <input disabled={isTimer} maxLength={2} onChange={handleInput} className={`bg-transparent text-3xl focus:outline-none w-2ch ${isTimer ? 'text-center' : ''}`} inputMode="numeric" type="number" placeholder='00' name="seconds"/>
    </div>
  )
}

export default TimerInput