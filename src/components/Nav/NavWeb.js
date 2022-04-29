import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faChevronDown, faChevronUp, faTimes} from '@fortawesome/free-solid-svg-icons'
import {ReactComponent as CalendarSvg} from "../images/icon-calendar.svg"
import {ReactComponent as PlanningSvg} from "../images/icon-planning.svg"
import {ReactComponent as ReminderSvg} from "../images/icon-reminders.svg"
import {ReactComponent as TodoSvg} from "../images/icon-todo.svg"



export default function NavWeb() {
    const [dropDown1, setDropDown1] = React.useState(false)
    const [dropDown2, setDropDown2] = React.useState(false)

    function handleMenu1(){
        return (
            setDropDown1(!dropDown1)
        ) 
    }

    function handleMenu2(){
        return (
            setDropDown2(!dropDown2)
        ) 
    }
    
    let content
    let content1

    if(dropDown1){
        content = 
            <ul className="feature-list">
                <li><TodoSvg/>Todo List</li>
                <li><CalendarSvg/>Calendar</li>
                <li><ReminderSvg/>Reminder</li>
                <li><PlanningSvg/>Planning</li>
            </ul>
    }

    if(dropDown2){
        content1 =
            <ul className="company-list">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
            </ul>
    }
    return(
        <div className="nav-div-web">
            <h1 className="web-title">Snap</h1>
            <nav className="nav-web">
                <ul className="web-nav1">
                    <li className="features"
                    onClick={()=> handleMenu1()}
                    >Features  
                      <FontAwesomeIcon
                        icon={!dropDown1? faChevronDown: faChevronUp}
                        className="down-arrow"
                        
                    />
                     {content}
                    </li>
                    <li className="company"
                    onClick={()=> handleMenu2()}
                    >Company
                        <FontAwesomeIcon
                        icon={!dropDown2? faChevronDown: faChevronUp}
                        className="down-arrow"
                        />
                        {content1}
                    </li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
                <ul className="web-nav2">
                    <li className="login">Login</li>
                    <li className="register">Register</li>
                </ul>
            </nav>
                            
        </div>
    )
}