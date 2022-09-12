import { Link } from "react-router-dom";

function Header() {
    return <div>
        <nav className="bg-black text-bold text-white">
            <ul className="md:flex">
                <li className="m-2 p-2"><Link to='/'>Home</Link></li>
                <li className="m-2 p-2"><Link to='/about'>About</Link></li>
                <li className="m-2 p-2"><Link to='/'>Our Services</Link></li>
                <li className="m-2 p-2"><Link to='/'>Gallery</Link></li>
                <li className="m-2 p-2"><Link to='/book-now'>Book Now</Link></li>
                <li className="m-2 p-2"><Link to='/'>Team</Link></li>
                <li className="m-2 p-2"><Link to='/'>Contact</Link></li>
            </ul>
        </nav>
        </div>
} 

export default Header;