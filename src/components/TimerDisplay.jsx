const TimerDisplay = ({hours, seconds, minutes}) => {
    return (
      <div className="*:bg-brown-400 *:rounded-full *:py-0.5 flex *:w-full gap-2 *:font-medium py-8">
        <div className="">{hours} <span className="text-yellow-800">hours</span></div>
        <div className="">{minutes} <span className="text-yellow-800">mins</span></div>
        <div className="">{seconds} <span className="text-yellow-800">secs</span></div>
      </div>
    )
  }
  
  export default TimerDisplay