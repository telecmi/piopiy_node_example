const { Piopiy } = require("piopiy");
const piopiy = new Piopiy("your_app_id", "your_app_secret");

const customer_number = "Customer number"; // Your customer phone number with country code.
const piopiy_number = "Your piopiy number"; // Your piopiy number provided by the Piopiy TeleCMI platform.
const multiple_agent_number = ["Your agent phone number", "Your agent phone number"]   // Multiple agent's phone number with country code
const options = {
    duration: 10,       // (Optional) Maximum duration of the call in seconds
    timeout: 20,        // (Optional) Time to wait for the call to be answered
    loop: 1,             // (Optional) Number of retry attempts if the call is not answered
    ring_type: "group" // (Optional) Type of ringing for the call.
};

piopiy.voice.call(customer_number, piopiy_number, multiple_agent_number, options).then(res => {
    console.log('Success res:', res);
}).catch(error => {
    console.error('Error:', error);
});