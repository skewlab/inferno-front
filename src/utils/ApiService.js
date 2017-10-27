/*
  Author: Jonas Johansson
  Email:  jan.jonas.johansson@gmail.com
  Github: jjojo
  Description:
  Api service with methods to fetch api data
*/

/* Make sure CORS is enabled either via proxy or on the backend" */
const API = 'http://localhost:3000/api/';

function getPost( postId ) {
  return fetch(`${API}posts/${postId}`)
    .then(_verifyResponse, _handleError);
}

function getContacts( userId ) {
  return fetch(`${API}user-connections/${userId}`)
    .then(_verifyResponse, _handleError);
}

function getProfileInfo( userId ) {
  return fetch(`${API}users/${userId}`)
    .then(_verifyResponse, _handleError);
}


function signUp( signUpCredentials ) {
  return fetch(`${API}users`,{
    method: "POST",
    headers: {
      "Content-type": "application/json"      
    },
    body: JSON.stringify( signUpCredentials )
  })
.then(_verifyResponse, _handleError);
}

function signIn( signInCredentials ) {
  return fetch(`${API}signin`,{
    method: "POST",
    headers: {
      "Content-type": "application/json"      
    },
    body: JSON.stringify(signInCredentials)
  })
  .then(_verifyResponse, _handleError);
}




// Verify that the fetched response is JSON
function _verifyResponse(res) {
  let contentType = res.headers.get('content-type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return res.json();
  } else {
    _handleError({ message: 'Response was not JSON'});
  }
}
// Handle fetch errors
function _handleError(error) {
  console.error('An error occurred:', error);
  throw error;
}
// // Export ApiService
const ApiService = { 
  signIn,
  signUp,
  getPost,
  getContacts,
  getProfileInfo };
export default ApiService;