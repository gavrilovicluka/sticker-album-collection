export interface User {
    id: number,
    name: string,
    surname: string,
    username: string,
    email: string,
    password: string,
    address: string,
    phoneNumber: string,
    isAdmin: boolean | null
}

export interface UserRegistration {
    name: string,
    surname: string,
    username: string,
    email: string,
    password: string,
    address: string,
    phoneNumber: string,
    isAdmin: boolean
}

export interface UserEdit {
    username: string,
    email: string,
    address: string,
    phoneNumber: string
}