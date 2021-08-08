export interface Transaction {
    id: number,
    totalPrice: string,
    currency: string,
    creditCardType: string,
    creditCardNumber: string,
}

type TransactionKey = keyof Transaction

export const transactionHeader: {[key in TransactionKey]: string} = {
    id: 'Id',
    totalPrice: 'Total Price',
    currency: 'Currency',
    creditCardType: 'Credit Card Type',
    creditCardNumber: 'Credit Card Number'
}

