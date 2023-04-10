import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import { PatternFormat } from "react-number-format"
import { CardInformation } from "../../model"

const CardForm = () => {
    const [cardNumber, setCardNumber] = useState<string>('')
    const [cvc, setCvc] = useState<string>('')
    const [expiryDate, setExpiryDate] = useState<string>('')
    
    const registerCard = (body: CardInformation) => {
        console.log(body)
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        const body: CardInformation = {
            cardNumber,
            cvc,
            expiryDate
        }
        registerCard(body)
    }

    return (
        <form onSubmit={submitHandler}>
            <Grid container direction='column' spacing={3}>
                <Grid item>
                    <PatternFormat
                        format='#### #### #### ####'
                        customInput={TextField}
                        name='cardNumber'
                        label='Card Number'
                        type='text'
                        placeholder='1234 1234 1234 1234'
                        value={cardNumber}
                        onValueChange={({ value }) => {
                            setCardNumber(value)
                        }}
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
                            value={cvc}
                            onValueChange={({ value }) => {
                                setCvc(value)
                            }}
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
                            value={expiryDate}
                            onValueChange={({ value }) => {
                                setExpiryDate(value)
                            }}
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
