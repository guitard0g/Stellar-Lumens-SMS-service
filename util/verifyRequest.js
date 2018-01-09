// Helper function for verifying the validity of the user request

class ArgumentError extends Error {
  constructor(message) {
    super(message);
    this.name = "ArgumentError";
  }
}

/**
* Takes the user's sent SMS and returns an object representation
* @param {Object} request the object returned by tokenize()
* @return {boolean} whether or not the request is valid
*/
let verify = (request) => {
	// TODO verify each individual argument
	switch(request.action){

		case "send": // 1 arg
			if(request.args.length === 1)
				return true
			throw new ArgumentError('This action requires 1 argument.');

		case "summary": // 0 args
			if(request.args.length === 0)
				return true
			throw new ArgumentError('This action requires 0 arguments.');

		case "deposit": // 5 args
			if(request.args.length === 5)
				return true
			throw new ArgumentError('This action requires 5 arguments.');

		default:
			throw new ArgumentError('Unknown action.');
	}
}

module.exports = verify;
