export const isValidNumber = (inputString: string): boolean => {
    return /^\d+$/.test(inputString)
}

export const isValidDate = (date: Date): boolean => {
    return date && Object.prototype.toString.call(date) === "[object Date]"
}

export const validateCardNumber = (cardNumber: string): string => {
    let error = ''
    if (!cardNumber) error = 'Card number is required'
    else if (cardNumber.length !== 16) error = 'Card number must be 16 digits'
    else if (!isValidNumber(cardNumber)) error = 'Card number must be a number'
    return error
}

export const validateCvc = (cvc: string): string => {
    let error = ''
    if (!cvc) error = 'CVC is required'
    else if (cvc.length !== 3) error = 'CVC must be 3 digits'
    else if (!isValidNumber(cvc)) error = 'CVC must be a number'
    return error
}

export const formatExpiryDate = (expiryDate: string): Date => {
    const currentYearPrefix = new Date().getFullYear().toString().slice(0,2)
    const year = parseInt(currentYearPrefix + expiryDate.slice(2))
    const monthIndex = parseInt(expiryDate.slice(0,2))-1
    return new Date(year, monthIndex, 0)
}

export const validateExpiryDate = (expiryDate: string): string => {
    const date = formatExpiryDate(expiryDate)
    const today = new Date()

    let error = ''
    if (!expiryDate) error = 'Expiry date is required'
    else if (expiryDate.length < 4) error = 'Expiry date must be MM/YY'
    else if (!isValidDate(date)) error = 'Expiry date must be a number'
    else if (parseInt(expiryDate.slice(0,2)) > 12) error = 'Expiry date month should be less than or equal to 12'
    else if (date < today) error = 'Expiry date must be in future'
    return error
}