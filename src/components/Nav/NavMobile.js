import React from "react"
import NavMobileMenu from './NavMobileMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'



export default function NavMobile() {
    const [showMenu, setShowMenu] = React.useState(false)

    let menu
    let menuMask

    if(showMenu){
        menu=
        <div className="menu">
            <FontAwesomeIcon
            icon={faTimes}
            className="nav-icon1"
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
            <h1>Uc</h1>
            <FontAwesomeIcon
                icon={faBars}
                onClick={()=> setShowMenu(true)}
                className="nav-icon"/>
            {menuMask}
            {menu}
        </div>
    )
}