/*
  Authors: 	Jonas Johansson, jan.jonas.johansson@gmail.com, github.com/jjojo (last: 2017-10-29)
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
		remove: remove,
		auth: auth
	}

	///////////////

	/*
		NOTE:
		Credentials shouldn't be sent on every 
		api call maybe... or they should.

		Jonas Johansson 29/10-17
	*/

	/*
		Check if authenticated and return pure http statuses
	*/
	function auth( ) {
		return fetch( Config.API + "auth" ,
			{
				method: "GET",
				credentials: 'include'
			})
			.then( res => {
				return res
			}, error =>{
				return error
			});
	};

	/*
		Get any endpoint in the api except auth
	*/
	function get( endpoint ) {
		return fetch( Config.API + endpoint ,
			{
				method: "GET",
				credentials: 'include'
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
			credentials: 'include',
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
			credentials: 'include',
	    	headers: {
	      	"Content-type": "application/json",
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
				method: "DELETE",
				credentials: 'include'
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
