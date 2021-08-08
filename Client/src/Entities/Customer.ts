export interface Customer {
    id: number,
    firstName: string,
    lastName: string,
    mail: string, 
    gender: string, 
    country: string, 
    city: string, 
    street: string, 
    phone: string 
}

type CustomerKey = keyof Customer

export const customerHeader: {[key in CustomerKey]: string} = {
    id: 'Id',
    firstName: 'First Name',
    lastName: 'Last Name',
    mail: 'Mail',
    gender: 'Gender',
    country: 'Country',
    city: 'City',
    street: 'Street',
    phone: 'Phone'
}

