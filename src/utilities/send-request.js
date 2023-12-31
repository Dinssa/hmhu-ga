import { getToken } from './users-service';


export default async function sendRequest(url, method = 'GET', payload = null, params = {}) {
  try {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc. 
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
        // Ensure the headers object exists
        options.headers = options.headers || {};
        // Add token to an Authorization header
        // Prefacing with 'Bearer' is recommended in the HTTP specification
        options.headers.Authorization = `Bearer ${token}`;
    }
    // Add any query string parameters to the url
    const urlParams = new URLSearchParams(params);
    const res = await fetch(`${url}?${urlParams}`, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
  } catch (err) {
    return null;
  }
}