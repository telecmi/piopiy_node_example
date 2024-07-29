const { Piopiy } = require("piopiy");
const piopiy = new Piopiy(2222347, "305b5635-a510-4d3a-9da5-debe67f56140");


piopiy.voice.call(
    919999999999,                      // Agent phone number with country code
    918000000000,                     // Caller ID
    [919800000000, 919700000000],    // Use this to play your alert audio
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