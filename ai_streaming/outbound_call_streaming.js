const { Piopiy, PiopiyAction } = require("piopiy");
const piopiy = new Piopiy("your_app_id", "your_app_secret");
const action = new PiopiyAction();

const ws_url = "ws://example.tcp.ngrok.url"   // Your websocket tcp ngrok URL
const options = {
    listen_mode: "both", // Specifies who hears the streamed audio. Options are callee, caller, or both.
    voice_quality: "8000", // The desired voice quality in bits per second. Options are 8000, 16000.
    stream_on_answer: true // Whether to start streaming after the call is answered.
};
const customer_number = "Customer number"; // Your customer phone number with country code.
const piopiy_number = "Your piopiy number" // Your piopiy number provided by the Piopiy TeleCMI platform.
const outbound_streaming_pcmo_function = action.PCMO(); // Use this PCMO function to start outbound call streaming.

action.stream(ws_url, options);

piopiy.voice.call(customer_number, piopiy_number, outbound_streaming_pcmo_function)
    .then(res => {
        console.log('Success response:', res);
    }).catch(error => {
        console.error('Error:', error);
    });