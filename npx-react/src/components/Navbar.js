import { Link } from 'react-router-dom'

import logo from '../css/logo.jpg'

export function Navbar() {
    return(
            <header>
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                <nav className="navbar">
                    <ul>
                        <li><a href="/Trade"><button className="navButtons">Trade</button></a></li>
                        <li><a href="User.php"><button className="navButtons">My Collection</button></a></li>
                        <li><a href="User.php"><button className="navButtons">Deck Builder</button></a></li>
                        <li><a href="/Login"><button className="navButtons">Login</button></a></li>
                    </ul>
                </nav>
            </header>
    )
}

export default Navbar