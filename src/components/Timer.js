import React, {useEffect, useState} from "react"
import TimerDisplay from "./TimerDisplay"

export default function Timer(){
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    function calculateTimeLeft(){
        let year = new Date().getFullYear()
        let difference = +new Date(`09/10/${year}`) - +new Date()

        let timeLeft = {}

        if(difference > 0){
            timeLeft ={
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        }
        return timeLeft
    }
    
    useEffect(()=>{
        const timer = setTimeout(()=> {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return ()=> clearTimeout(timer);
    })

    const timerComponents = []
    console.log(timeLeft)
    Object.keys(timeLeft).forEach((interval) =>{
        if (!timeLeft[interval]){
            return
        }
        timerComponents.push(
            <span>{timeLeft[interval]} {interval}{" "}</span>
        )
    })
    return(
        <div>
            {timerComponents.length?  <TimerDisplay 
            day={timeLeft.days}
            hour={timeLeft.hours}
            minute={timeLeft.minutes}
            second={timeLeft.seconds}/> : <span>Tiime up</span>}
        </div>
        
    )
}