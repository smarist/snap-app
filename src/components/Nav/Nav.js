import react from "react"
import NavMobile from "./NavMobile"
import NavWeb from "./NavWeb"
import { useMediaQuery } from 'react-responsive'
import "./nav.css"



export default function Nav(){


    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 400px) and (max-width:  899px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 900px)' })


    return(
        <div>
            {isTabletOrMobile && <NavMobile/>}
            {isBigScreen && <NavWeb/>}
        </div>
       
    )
}