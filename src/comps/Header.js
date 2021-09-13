import logo from "../images/logo.svg"

const Header = ({ clicked, setClicked, setResults }) => {

    const func = () => {
        setClicked(!clicked)
        setResults("")
    }
    
    return (
        <header>
           <img src={logo} alt="letscook logo" className="logo"/> 
           <button className="search-btn" onClick={func}>
               { !clicked && <p>Search</p> }
               { clicked && <p>Home</p> }
           </button>
        </header>
    )
}

export default Header
