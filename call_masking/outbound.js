const { Piopiy } = require("piopiy");
const piopiy = new Piopiy("your_appid", "your_app_token");

piopiy.voice.call(
    919999999999,         // Agent phone number with country code
    918000000000,         // Caller ID
    917600000000,         // Customer phone number with country code
    {
        duration: 10,       // (Optional) Maximum duration of the call in seconds
        timeout: 20,        // (Optional) Time to wait for the call to be answered
        loop: 1,            // (Optional) Number of retry attempts if the call is not answered
        record: true        // (Optional) Whether to record the call
    }
).then(res => {
    console.log('Call connected, answer URL:', res);
}).catch(error => {
    console.error('Error:', error);
});