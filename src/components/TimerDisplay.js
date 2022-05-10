import React from "react"


export default function TimerDisplay(props){
    return(
        <div className="flex-row">
            <div className="flex-col">
                <div className="box-size flex-col button"><span>{props.day}</span></div>
                <span>Days</span>
            </div>

            <div className="flex-col">
                <div className="box-size flex-col button"><span>{props.hour}</span></div>
                <span>Hours</span>
            </div>

            <div className="flex-col">
                <div className="box-size flex-col button"><span>{props.minute}</span></div>
                <span>Minutes</span>
            </div>

            <div className="flex-col">
                <div className="box-size flex-col button"><span>{props.second}</span></div>
                <span>Seconds</span>
            </div>
        </div>
    )
}