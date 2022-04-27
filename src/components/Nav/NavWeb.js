import react from "react"

export default function NavWeb() {
    return(
        <div className="nav-div-web">
            <h1 className="web-title">Snap</h1>
            <nav>
                <ul className="web-nav1">
                    <li>Features</li>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
            </nav>
            <nav>
                <ul className="web-nav2">
                    <li>Login</li>
                    <li>Register</li>
                </ul>            
            </nav>
        </div>
    )
}