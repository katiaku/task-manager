export class Contact {
    firstName = '';
    lastName = '';
    email = '';
    isConnected = false

    constructor(firstName, lastName, email, isConnected){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isConnected = isConnected
    }
}