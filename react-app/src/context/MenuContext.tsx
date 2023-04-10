import React, { createContext} from 'react'

type MenuOpenContextType = {
    menuOpen: boolean
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuOpenContext = createContext<MenuOpenContextType>(undefined!)
