import logo from "../images/logo.svg"
import { FcSearch } from "react-icons/fc";
import { IoCloseOutline } from "react-icons/io5";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = ({ setResults, isHome, setIsHome, setInput }) => {

    const handleClick = () => {
        setIsHome(!isHome)
        // setResults("")
        // setInput('')
    }

    const pathname = window.location.pathname

    return (
        <>
            { pathname === '/' ? 
                <header>
                    <img src={logo} alt="letscook logo" className="logo"/>
                    <Link to='/Content' className="header-btn" onClick={handleClick}>
                        <IconButton>
                            <FcSearch className='icon'/>
                        </IconButton>
                    </Link>
                </header> 
            : pathname === '/Content' ?
                <header>
                    <Link to='/' onClick={handleClick}>
                        <img src={logo} alt="letscook logo" className="logo"/>
                    </Link>
                    <Link to='/' className="header-btn" onClick={handleClick}>
                        <IconButton>
                            <IoCloseOutline className='icon'/>
                        </IconButton>
                    </Link>
                </header> 
            : null
            }
        </>
    )
}

export default Header
