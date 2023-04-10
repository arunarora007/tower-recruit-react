import WelcomeText from './WelcomeText'
import CardForm from './CardForm'
import { Box } from '@mui/material'
import { User } from '../../model'

const user: User = {
    firstName: 'Arun',
    lastName: 'Arora'
}

const RegisterCard = () => {
    return (
        <div className='registerCard'>
            <Box m={4}></Box>
            <WelcomeText user={user} />
            <Box m={4}></Box>
            <CardForm />
        </div>
    )
}

export default RegisterCard