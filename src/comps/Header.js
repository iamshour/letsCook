import logo from "../images/logo.svg"
import { FcSearch } from "react-icons/fc";
import { IoCloseOutline } from "react-icons/io5";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = ({ clicked, setClicked, setResults }) => {

    const handleClick = () => {
        setClicked(!clicked)
        setResults("")
    }
    
    return (
        <header>
            { !clicked && 
                <>
                    <img src={logo} alt="letscook logo" className="logo"/>
                    <Link to='/Content' className="header-btn" onClick={handleClick}>
                        <IconButton>
                            <FcSearch className='icon'/>
                        </IconButton>
                    </Link>
                </>
            }
            { clicked && 
                <>
                    <Link to='/' onClick={handleClick}>
                        <img src={logo} alt="letscook logo" className="logo"/>
                    </Link>
                    <Link to='/' className="header-btn" onClick={handleClick}>
                            <IconButton>
                                <IoCloseOutline className='icon'/>
                            </IconButton>
                    </Link>
                </>
            }
        </header>
    )
}

export default Header
