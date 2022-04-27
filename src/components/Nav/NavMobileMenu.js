import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faTimes} from '@fortawesome/free-solid-svg-icons'

export default function NavMobileMenu(props) {

    return(
        <div>
            <nav>
                <ul>
                    <li>Features</li>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
            </nav>
        </div>
    )
}