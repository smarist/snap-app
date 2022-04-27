import react from "react"
import NavMobile from "./NavMobile"
import NavWeb from "./NavWeb"
import { useMediaQuery } from 'react-responsive'



export default function Nav(){


    const isTabletOrMobile = useMediaQuery({ query: '(max-width:  900px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 900px)' })


    return(
        <div>
            {isTabletOrMobile && <NavMobile/>}
            {isBigScreen && <NavWeb/>}
        </div>
       
    )
}