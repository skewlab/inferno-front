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


export default ApiService;
