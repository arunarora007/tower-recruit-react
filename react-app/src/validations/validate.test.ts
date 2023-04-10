import{
    isValidDate,
    isValidNumber
} from './Validate'

describe('isValidNumber', () =>{
    it('returns true if given number', () => {
        const inputString = '123'
        const isValid = isValidNumber(inputString)
        expect(isValid).toBeTruthy
    })
    
    it('returns false if given number is string', () => {
        const inputString = 'abc'
        const isValid = isValidNumber(inputString)
        expect(isValid).toBeFalsy
    })

    it('returns true if given number has white spaces', () => {
        const inputString = '1 2 3'
        const isValid = isValidNumber(inputString)
        expect(isValid).toBeFalsy
    })
})


describe('isValidDate', () =>{
    it('returns true if given date Object', () => {
        const date = new Date()
        const isValid = isValidDate(date)
        expect(isValid).toBeTruthy
    })
    
    it('returns false if given number is string', () => {
        const date = new Date().toDateString
        const isValid = isValidDate(date as unknown as Date)
        expect(isValid).toBeFalsy
    })

})