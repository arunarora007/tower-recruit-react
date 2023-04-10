import { Button, Grid, TextField } from "@mui/material"
import { PatternFormat } from "react-number-format"

const CardForm = () => {
    return (
        <form>
            <Grid container direction='column' spacing={3}>
                <Grid item>
                    <PatternFormat
                        format='#### #### #### ####'
                        customInput={TextField}
                        name='cardNumber'
                        label='Card Number'
                        type='text'
                        placeholder='1234 1234 1234 1234'
                        required
                        autoFocus
                        fullWidth
                        valueIsNumericString
                    />
                </Grid>

                <Grid container item direction='row' spacing={3}>
                    <Grid item>
                        <PatternFormat
                            format='###'
                            customInput={TextField}
                            name='cvc'
                            label='CVC'
                            type='text'
                            placeholder='123'
                            required
                            valueIsNumericString
                        />
                    </Grid>

                    <Grid item>
                        <PatternFormat
                            format='##/##'
                            customInput={TextField}
                            name='expiryDate'
                            label='Expiry Date'
                            type='text'
                            placeholder='MM/YY'
                            required
                            valueIsNumericString
                        />
                    </Grid>
                </Grid>
                <Grid item>
                    <Button
                        type='submit'
                        variant='outlined'>
                        Register your Card
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default CardForm
