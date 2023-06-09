import {Typography} from '@mui/material'
import  {User} from '../../model'

type WelcomeTextProps = {
    user: User
}

const WelcomeText = ({user}: WelcomeTextProps) =>{
    return (
        <Typography className='WelcomeText' variant='h4'>
        Welcome {user.firstName}        
        </Typography>
    )
}

export default WelcomeText