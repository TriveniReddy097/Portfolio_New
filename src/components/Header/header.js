import {useState} from 'react'
import './header.css'
import '../../App.css'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div className='header center'>
            <h3 className='initials'>
                <a href="/" >TG.</a>
            </h3>
            <div onClick={() => setShowMenu(!showMenu)}>
                <svg className="MuiSvgIcon-hamburger-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
            </div>
            <div className='nav'>
                <ul>
                    <li><a href="#education">education</a></li>
                    <li><a href="#experience">experience</a></li>
                    <li><a href="#skills">skills</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </div>
        </div>
        {showMenu && <div className='nav-mobile'>
            <svg onClick={() => setShowMenu(!showMenu)} className="cross-btn" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                <ul>
                    <li>education</li>
                    <li>experience</li>
                    <li>skills</li>
                    <li>contact</li>
                </ul>
            </div>}
        </>
    )
}

export default Header