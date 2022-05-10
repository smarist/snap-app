import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {ReactComponent as CalendarSvg} from "../images/icon-calendar.svg"
import {ReactComponent as PlanningSvg} from "../images/icon-planning.svg"
import {ReactComponent as ReminderSvg} from "../images/icon-reminders.svg"
import {ReactComponent as TodoSvg} from "../images/icon-todo.svg"
import {Link} from "react-router-dom"



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
                <li><TodoSvg className="f-svg"/>Todo List</li>
                <li><CalendarSvg className="f-svg"/>Calendar</li>
                <li><ReminderSvg className="f-svg"/>Reminder</li>
                <li><PlanningSvg className="f-svg"/>Planning</li>
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
            <Link to="/"><h1 className="web-title">Uc</h1></Link>
            
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
                    <Link to="/Careers"><li>Careers</li></Link>
                    <li>About</li>
                </ul>
                <ul className="web-nav2">
                    <li className="login">Login</li>
                    <Link to="/Register"><li className="register">Register</li></Link>
                </ul>
            </nav>
                            
        </div>
    )
}