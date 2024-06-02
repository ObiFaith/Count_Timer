import { useEffect } from "react"

const TimerDisplay = ({isTimer, seconds, minutes, hours, totalSec, setTotalSec}) => {
  useEffect(() => {
    if (isTimer) {
      setTotalSec(Number(seconds) + (60 * Number(minutes)) + (60 * 60 * Number(hours)))
      const intervalId = setInterval(() => {
        setTotalSec(prevSec => {
          if (prevSec <= 0) {clearInterval(intervalId); return 0;} 
          else return prevSec - 1;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isTimer]);

  const displayHours = Math.floor(totalSec / 3600)
  const displayMins = Math.floor((totalSec % 3600) / 60)
  const displaySecs = totalSec % 60

  return (
    <div className="*:bg-brown-400 *:rounded-full *:py-0.5 flex *:w-full gap-2 *:font-medium py-8">
      <div className="">{!isTimer ? hours : displayHours} <span className="text-yellow-800">hours</span></div>
      <div className="">{!isTimer ? minutes : displayMins} <span className="text-yellow-800">mins</span></div>
      <div className="">{!isTimer ? seconds : displaySecs} <span className="text-yellow-800">secs</span></div>
    </div>
  )
  }
  
  export default TimerDisplay