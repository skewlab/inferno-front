/*
*/

class ApiResponseHandler {

	// Verify that the fetched response is JSON
	verifyResponse( res ) {
		let contentType = res.headers.get('content-type');
	  if (contentType && contentType.indexOf('application/json') !== -1) {
	    return res.json();
	  } else {
	    this.handleError({ message: 'Response was not JSON'});
	  }
	}

	// Handle fetch errors
	handleError( error ) {
	  console.error( 'An error occurred:', error );
	  throw error;
	}

}

export default ApiResponseHandler;
