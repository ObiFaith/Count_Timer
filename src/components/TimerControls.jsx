import { play_icon, pause_icon, repeat_icon, trash_icon } from "../assets"

const TimerControls = ({isTimer, setIsTimer}) => {

  return (
    isTimer ? 
    <div className="">
      <div className="flex gap-8 justify-around *:bg-yellow-600 *:px-3 *:w-10 *:py-2 *:mx-auto *:rounded-[100%]">
        <img onClick={() => setIsTimer(!isTimer)} src={pause_icon} alt="pause_icon" />
        <img src={trash_icon} alt="trash_icon" />
      </div>
      <img className="bg-yellow-600 px-3 w-10 py-2 mx-auto rounded-[100%]" src={repeat_icon} alt="repeat_icon" />
    </div> 
    :
    <img onClick={() => setIsTimer(!isTimer)} className="bg-yellow-600 px-3 w-10 py-2 mx-auto rounded-[100%]" src={play_icon} alt="play_icon" />          
  )
}
  
  export default TimerControls