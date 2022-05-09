import './NavBar.scss'
import {Link} from "react-router-dom";
import {MdFingerprint} from 'react-icons/md'
import {FaBars, FaTimes} from 'react-icons/fa'
import {useState} from "react";
import Button from './Button.jsx'

const NavBar = ({children}) => {

    const routes = [
        {label: 'Home', url: '/'},
        {label: 'Services', url: '/services'},
        {label: 'Products', url: '/products'},
    ]
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const menuVisible = () => setClick(!click)
    const closeMobileMenu = () => setButton(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    window.addEventListener('resize', showButton)
    return (
        <nav className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='navbar-logo'>
                    <MdFingerprint/>
                    LAVISH
                </Link>
                <div className='menu-icon'
                     onClick={menuVisible}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {routes.map(route => (
                        <li className='nav-item'>
                            <Link to={route.url} className='nav-links'>
                                {route.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        {button ?
                            (<Link to='sign-up' className='btn-link'>
                                <Button
                                    buttonStyle='btn--outline'
                                >
                                    SIGN UP
                                </Button>
                            </Link>)
                            : (
                                <Link to='sign-up' className='btn-link'>
                                    <Button
                                        buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'
                                    >
                                        SIGN ss
                                    </Button>
                                </Link>
                            )
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar