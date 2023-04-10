import {render, fireEvent, screen} from '@testing-library/react'
import CardForm from './CardForm'

describe('CardForm', () => {
    it('renders a card number field', () => {
        const {getByTestId} = render(<CardForm/>)
        expect(getByTestId('cardNumber')).toBeInTheDocument()
    })

    
    it('renders a cvc field', () => {
        const {getByTestId} = render(<CardForm/>)
        expect(getByTestId('cvc')).toBeInTheDocument()
    })
    
    it('renders a expiry date field', () => {
        const {getByTestId} = render(<CardForm/>)
        expect(getByTestId('expiryDate')).toBeInTheDocument()
    })

    it('validates the card number', async () => {        
        const {getByTestId} = render(<CardForm/>)
        const input = getByTestId('cardNumber')

        fireEvent.change(input, {
            target: {
                value: ''
            }
        })
        fireEvent.blur(input)
        expect(await screen.findByText(/Card number is required/i)).toBeInTheDocument()

        fireEvent.change(input, {
            target: {
                value: '1234'
            }
        })
        fireEvent.blur(input)
        expect(await screen.findByText(/Card number must be 16 digits/i)).toBeInTheDocument()
    })

    it('validates the cvc', async () => {        
        const {getByTestId} = render(<CardForm/>)
        const input = getByTestId('cvc')

        fireEvent.change(input, {
            target: {
                value: ''
            }
        })
        fireEvent.blur(input)
        expect(await screen.findByText(/CVC is required/i)).toBeInTheDocument()

        fireEvent.change(input, {
            target: {
                value: '12'
            }
        })
        fireEvent.blur(input)
        expect(await screen.findByText(/CVC must be 3 digits/i)).toBeInTheDocument()
    })

    it('validates the expiry date', async () => {        
        const {getByTestId} = render(<CardForm/>)
        const input = getByTestId('expiryDate')

        fireEvent.change(input, {
            target: {
                value: ''
            }
        })
        fireEvent.blur(input)
        expect(await screen.findByText(/Expiry date is required/i)).toBeInTheDocument()

        fireEvent.change(input, {
            target: {
                value: '12'
            }
        })
        fireEvent.blur(input)
        expect(await screen.findByText(/Expiry date must be MM\/YY/i)).toBeInTheDocument()

        fireEvent.change(input, {
            target: {
                value: '1325'
            }
        })
        fireEvent.blur(input)
        expect(await screen.findByText(/Expiry date month should be less than or equal to 12/i)).toBeInTheDocument()

        
        fireEvent.change(input, {
            target: {
                value: '1222'
            }
        })
        fireEvent.blur(input)
        expect(await screen.findByText(/Expiry date must be in future/i)).toBeInTheDocument()
    })

} )