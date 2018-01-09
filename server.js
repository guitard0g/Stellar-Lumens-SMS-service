const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.post('/sms', (req, res) => {
	// get SMS text body
	// body format: userSeed: actionType (...actionArgs)
	const body = req.body.Body;

	// instantiate twiml response
  const twiml = new MessagingResponse();

	try{
		// tokenize the sms
		const request = require('./util/tokenizer')(body);
		// verify the request
		require('./util/verifyRequest')(request);

		// TODO carry out the request

		// write success message
  	twiml.message('Success blah blah');
	}
	catch(e){
		// TODO handle error and send error message
  	twiml.message('Failure blah blah');
	}


  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

// exposing server port currently done using ngrok but will switch to nginx
http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
