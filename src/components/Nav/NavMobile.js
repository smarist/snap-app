import React from "react"
import NavMobileMenu from './NavMobileMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
  import { faCheckSquare, faCoffee, faTimes} from '@fortawesome/free-solid-svg-icons'



export default function NavMobile() {
    const [showMenu, setShowMenu] = React.useState(false)

    let menu
    let menuMask

    if(showMenu){
        menu=
        <div className="menu">
            <FontAwesomeIcon
            icon={faTimes}
            className="nav-icon"
            onClick={()=> setShowMenu(false)}
            />
            <NavMobileMenu/>
        </div>
       
        menuMask=
        <div className="menuMask">
        </div>
    }
    return(
        <div className="nav-div-web">
            <h1>Snap</h1>
            <FontAwesomeIcon
                icon={faBars}
                onClick={()=> setShowMenu(true)}
                className="nav-icon"/>
            {menuMask}
            {menu}
        </div>
    )
}