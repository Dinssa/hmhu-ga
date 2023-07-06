// In this service file, 

import * as usersAPI from './users-api';

export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData);

    // Persist the "token"
    localStorage.setItem('token', token);

    return token;
  }