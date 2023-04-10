import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import { PatternFormat } from "react-number-format"
import { CardInformation } from "../../model"
import { validateCardNumber, validateCvc, validateExpiryDate } from "../../validations/Validate"

const CardForm = () => {
    const [cardNumber, setCardNumber] = useState<string>('')
    const [cvc, setCvc] = useState<string>('')
    const [expiryDate, setExpiryDate] = useState<string>('')
    const [cardNumberError, setCardNumberError] = useState<string>('')
    const [cvcError, setCvcError] = useState<string>('')
    const [expiryDateError, setExpiryDateError] = useState<string>('')
    
    const cardNumberBlur = () => {
        setCardNumberError('')
        const error = validateCardNumber(cardNumber)
        if (error) setCardNumberError(error)
    }

    const cvcBlur = () => {
        setCvcError('')
        const error = validateCvc(cvc)
        if (error) setCvcError(error)
    }

    const expiryDateBlur = () => {
        setExpiryDateError('')
        const error = validateExpiryDate(expiryDate)
        if (error) setExpiryDateError(error)
    }
    
    const registerCard = (body: CardInformation) => {
        console.log(body)
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        cardNumberBlur()
        cvcBlur()
        expiryDateBlur()
        if (cardNumber && cvc && expiryDate && !cardNumberError && !cvcError && !expiryDateError) {
            const body: CardInformation = {
                cardNumber,
                cvc,
                expiryDate
            }
            registerCard(body)
        }
        else console.log('Please check required fields before submitting')
    }

    return (
        <form className="cardForm" onSubmit={submitHandler}>
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
                        onBlur={cardNumberBlur}
                        error={cardNumberError ? true : false}
                        helperText={cardNumberError}
                        inputProps={{
                            'data-testid':'cardNumber'
                        }}
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
                            onBlur={cvcBlur}
                            error={cvcError ? true : false}
                            helperText={cvcError}
                            inputProps={{
                                'data-testid':'cvc'
                            }}
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
                            onBlur={expiryDateBlur}
                            error={expiryDateError ? true : false}
                            helperText={expiryDateError}
                            inputProps={{
                                'data-testid':'expiryDate'
                            }}
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
