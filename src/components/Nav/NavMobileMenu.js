import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {ReactComponent as CalendarSvg} from "../images/icon-calendar.svg"
import {ReactComponent as PlanningSvg} from "../images/icon-planning.svg"
import {ReactComponent as ReminderSvg} from "../images/icon-reminders.svg"
import {ReactComponent as TodoSvg} from "../images/icon-todo.svg"
import {Link} from "react-router-dom"

export default function NavMobileMenu(props) {
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
            <ul className="feature-list-m">
                <li><TodoSvg className="m-svg"/>Todo List</li>
                <li><CalendarSvg className="m-svg"/>Calendar</li>
                <li><ReminderSvg className="m-svg"/>Reminder</li>
                <li><PlanningSvg className="m-svg"/>Planning</li>
            </ul>
    }

    if(dropDown2){
        content1 =
            <ul className="company-list-m">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
            </ul>
    }

    return(
        <nav className="nav-mobile">
            <ul className="mobile-nav1">
                <li className="features-m"
                onClick={()=> handleMenu1()}
                >Features 
                    <FontAwesomeIcon
                    icon={!dropDown1? faChevronDown: faChevronUp}
                    className="down-arrow"
                    
                /> 
                    {content}
                </li>
                <li className="company=m"
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
            <ul className="mobile-nav2">
                <Link to="/Login"><li className="login-m">Login</li></Link>
                <Link to="/Register"><li className="register-m">Register</li></Link>
            </ul>
        </nav>
                            
    )
}