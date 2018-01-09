// Helper file for splitting the sent arguments into an object for processing

// regular expression to follow the format:
// userSeed: actionType (arg1, arg2...)
// last parameter is optional (some actions may not require it)
const re = /(\w+):\s*(\w+)\s*(\(((\s*\w+,?\s*)+)\))?\s*$/

class FormatError extends Error {
  constructor(message) {
    super(message);
    this.name = "FormatError";
  }
}

/**
* Splits up the arguments provided in parens
* @param {String} params the string to be split by commas
*/
let splitArgs = (params) => {
	let args = '';
	if(params !== undefined){
		args = params;
		// remove the opening and closing parens
		args = args.substring(1, args.length-1);
		// split on parens
		args = args.split(',').map(arg => arg.trim());
	}
	return args;
}

/**
* Takes the user's sent SMS and returns an object representation
* @param {String} body the string text of the SMS
* @return {Object} object representation of the users SMS
* @throws {FormatError} if the SMS doesn't fit this format
*/
let tokenize = (body) => {
	// test if the body matches our regex
	if(re.test(body)){
		// take out the unnecessary noise captured by the regex
		const request = re.exec(body).slice(1,4);

		// extract our 3 items
		const seed = request[0];
		const action = request[1];
		const args = splitArgs(request[2]);

		return {
			'seed': seed,
			'action': action,
			'args': args
		};
	}
	// throw an error if the body doesn't match the regex
	else{
		throw new FormatError("Invalid request format.")
	}
}

module.exports = tokenize;
