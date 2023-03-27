import axios from "axios";

/**
 * Login Method to ReqRes endpoint
 * @param { string } email 
 * @param {string } password 
 */

export const login = (email, password) => {

    let body = {
        email: email,
        password: password
    }

    // Returns the response with a Promise
    return axios.post('https://reqres.in/api/login', body)
}

// TODO Obtain All Users

// TODO Obtain User by ID

// TODO Create User

// TODO Update User

// TODO Delete User