import { useContext } from 'react'
import { Backdrop, Typography } from '@mui/material'
import { MenuOpenContext } from '../../context/MenuContext'

const Menu = () => {
    const { menuOpen, setMenuOpen } = useContext(MenuOpenContext);
    return (
        <Backdrop open={menuOpen}>
            <Typography variant='h4'>
                This is menu content
            </Typography>
        </Backdrop>
    )
}

export default Menu