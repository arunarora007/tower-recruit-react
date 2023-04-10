import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components:{
        MuiButton: {
            styleOverrides: {
                text: {
                    color: 'white'
                }
            }
        },
        MuiBackdrop: {
            styleOverrides:{
                root: {
                    backgroundColor: '#123444',
                    color: 'white',
                    zIndex: 1000
                }
            }
        }
        
    }
})

export default theme