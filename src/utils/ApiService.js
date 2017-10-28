/*
  Authors: Jonas Johansson, jan.jonas.johansson@gmail.com, github.com/jjojo
					 Filip Johansson, filip.carl.johansson@gmail.com, github.com/fippli

  Description:
  Api service with methods to fetch api data

	NOTE:
	Make sure CORS is enabled either via proxy or on the backend while developing on two different ports.
	This should only be configured like this in dev mode.
*/

import Config from "./Config"

const ApiService = (function () {

	var service = {
		get: get,
		post: post,
		put: put,
		remove: remove
	}

	///////////////

	/*
		Get any endpoint in the api
	*/
	function get( endpoint ) {
		return fetch( Config.API + endpoint ,
			{
				method: "GET"
			})
			.then(
				verifyResponse,
				handleError );
	};

	/*
		Post to any endpoint in the api
	*/
	function post( endpoint, data ) {
		return fetch( Config.API + endpoint ,
			{
	    	method: "POST",
	    	headers: {
	      	"Content-type": "application/json"
	    	},
	    	body: JSON.stringify( data )
	  	})
			.then(
				verifyResponse,
				handleError );
	};

	/*
		Update data on any endpoint
	*/
	function put( endpoint, data ) {
		return fetch( Config.API + endpoint,
			{
	    	method: "PUT",
	    	headers: {
	      	"Content-type": "application/json"
	    	},
	    	body: JSON.stringify( data )
	  	})
			.then(
				verifyResponse,
				handleError );
	};

	/*
		Delete from any endpoint
	*/
	function remove( endpoint ) {
		return fetch( Config.API + endpoint,
			{
				method: "DELETE"
			})
			.then(
				verifyResponse,
				handleError );
	};

	// Verify that the fetched response is JSON
	function verifyResponse( res ) {
	  let contentType = res.headers.get( 'content-type' );
	  if (contentType && contentType.indexOf( 'application/json' ) !== -1) {
	    return res.json();
	  } else {
	    handleError( { message: 'Response was not JSON' } );
	  }
	}
	// Handle fetch errors
	function handleError( error ) {
	  console.error( 'An error occurred:', error );
	  throw error;
	}

	return service;

})();

// class ApiService {
//
// 	conf() {
// 		console.log( "Config.API" );
// 	}

	/*
		Get any endpoint in the api
	*/
	// get( endpoint ) {
	// 	return fetch( Config.API + endpoint ,
	// 		{
	// 			method: "GET"
	// 		})
	// 		.then(
	// 			this._verifyResponse,
	// 			this._handleError );
	// };
	//
	// /*
	// 	Post to any endpoint in the api
	// */
	// post( endpoint, data ) {
	// 	return fetch( Config.API + endpoint ,
	// 		{
	//     	method: "POST",
	//     	headers: {
	//       	"Content-type": "application/json"
	//     	},
	//     	body: JSON.stringify( data )
	//   	})
	// 		.then(
	// 			this._verifyResponse,
	// 			this._handleError );
	// };
	//
	// /*
	// 	Update data on any endpoint
	// */
	// put( endpoint, data ) {
	// 	return fetch( Config.API + endpoint,
	// 		{
	//     	method: "PUT",
	//     	headers: {
	//       	"Content-type": "application/json"
	//     	},
	//     	body: JSON.stringify( data )
	//   	})
	// 		.then(
	// 			this._verifyResponse,
	// 			this._handleError );
	// };
	//
	// /*
	// 	Delete from any endpoint
	// */
	// delete( endpoint ) {
	// 	return fetch( Config.API + endpoint,
	// 		{
	// 			method: "DELETE"
	// 		})
	// 		.then(
	// 			this._verifyResponse,
	// 			this._handleError );
	// };
	//
	// // Verify that the fetched response is JSON
	// _verifyResponse( res ) {
	//   let contentType = res.headers.get('content-type');
	//   if (contentType && contentType.indexOf('application/json') !== -1) {
	//     return res.json();
	//   } else {
	//     this._handleError({ message: 'Response was not JSON'});
	//   }
	// }
	// // Handle fetch errors
	// _handleError( error ) {
	//   console.error('An error occurred:', error);
	//   throw error;
	// }

	// signUp( signUpCredentials ) {
	//   return fetch(`${API}users`,{
	//     method: "POST",
	//     headers: {
	//       "Content-type": "application/json"
	//     },
	//     body: JSON.stringify( signUpCredentials )
	//   })
	// .then(this._verifyResponse, this._handleError);
	// }
	//
	// signIn( signInCredentials ) {
	//   return fetch(`${API}signin`,{
	//     method: "POST",
	//     headers: {
	//       "Content-type": "application/json"
	//     },
	//     body: JSON.stringify(signInCredentials)
	//   })
	//   .then(this._verifyResponse, this._handleError);
	// }

// }

export default ApiService;
