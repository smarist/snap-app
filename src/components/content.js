import React from 'react'
import heroDesktop from "../components/images/image-hero-desktop.png"
import heroMobile from "../components/images/image-hero-mobile.png"
import { useMediaQuery } from 'react-responsive'
import {ReactComponent as DataSvg} from "./images/client-databiz.svg"
import {ReactComponent as MakerSvg} from "./images/client-maker.svg"
import {ReactComponent as AudioSvg} from "./images/client-audiophile.svg"
import {ReactComponent as MeetSvg} from "./images/client-meet.svg"

export default function Content(){
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 400px) and (max-width:  899px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 900px)' })
    return(
        <div className='side'>
            <div className='side1'>
                {isTabletOrMobile && <h1 className='side-h1'>Make remote work</h1>}
                {isBigScreen && <div className='h1-div'><h1 className='side-h1'>Make</h1> <h1 className='side-h1'>remote work</h1> </div>}
                
                <p>Get your team in syn no matter your location. Streamline processes, create team rituals and watch productivity soar </p>
                <div className='btn-div'>
                     <button className='side-btn'>Learn more</button>
                </div>
                <ul className='list-svg'>
                    <li><DataSvg className='svg'/></li>
                    <li><AudioSvg className='svg'/></li>
                    <li><MeetSvg className='svg'/></li>
                    <li><MakerSvg className='svg'/></li>  
                </ul>
            </div>
            <div className='side2'>
                {isTabletOrMobile && <img src={heroMobile} className='img-mobile'></img>}
                {isBigScreen && <img src={heroDesktop}className='img-desktop'></img>}
            </div>
        </div>
    )
}