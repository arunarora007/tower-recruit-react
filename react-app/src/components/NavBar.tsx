import { useContext } from 'react'
import MenuIcon from "@mui/icons-material/Menu"
import { MenuOpenContext } from "../context/MenuContext"
import { ArrowBack } from "@mui/icons-material"
import { Button } from "@mui/material"

const NavBar = () =>{
    const {menuOpen, setMenuOpen} = useContext(MenuOpenContext);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const buttonIcon = menuOpen ? <ArrowBack/> : <MenuIcon/>
    const buttonText = menuOpen ? "Back" : "Menu"
    const title = menuOpen? "Menu" : "Register card form"

    return (
        <div className="navbar">
            <Button startIcon={buttonIcon} onClick={toggleMenu}>
                {buttonText}
            </Button>
            <header>{title}</header>
        </div>
    )
}

export default NavBar