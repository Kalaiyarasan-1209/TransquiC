exports.handler = function(context, event, callback) {
    const client = context.getTwilioClient();
    const mobileNumber = event.mobileNumber;

    const response = new Twilio.Response();
    response.appendHeader('Access-Control-Allow-Origin', '*');
    response.appendHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');

    client.messages
        .create({
            body: 'You have a new request. Reply with ACCEPT or DECLINE.',
            from: context.TWILIO_PHONE_NUMBER,
            to: mobileNumber
        })
        .then(message => {
            response.setBody({ success: true, messageSid: message.sid });
            callback(null, response);
        })
        .catch(error => {
            response.setBody({ success: false, error: error.message });
            callback(null, response);
        });
};
