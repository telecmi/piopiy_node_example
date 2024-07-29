const { Piopiy } = require("piopiy");
const piopiy = new Piopiy("your_appid", "your_app_token");

const agent_number = "Agent phone number"; // Your agent phone number with country code, Number type
const caller_id = "Caller ID"; // Your caller ID, Number type
const customer_number = "Customer number"; // Your customer phone number, Number type
const options = {
    duration: 10,       // (Optional) Maximum duration of the call in seconds, Number type
    timeout: 20,        // (Optional) Time to wait for the call to be answered, Number type
    loop: 1            // (Optional) Number of retry attempts if the call is not answered, Number type
}; // Object type


piopiy.voice.call(agent_number, caller_id, customer_number, options)
    .then((res) => {
        console.log("Call connected, answer URL:", res);
    })
    .catch((error) => {
        console.error("Error:", error);
    });