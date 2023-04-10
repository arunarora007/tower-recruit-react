import WelcomeText from './WelcomeText'
import CardForm from './CardForm'
import { Box} from '@mui/material'

const RegisterCard = () =>{
    return (
        <div>
            <Box m={4}></Box>
            <WelcomeText/>
            <Box m={4}></Box>
            <CardForm />
        </div>
    )
}

export default RegisterCard