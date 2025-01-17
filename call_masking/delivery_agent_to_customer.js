const { Piopiy } = require("piopiy");
const piopiy = new Piopiy("your_app_id", "your_app_secret");

const delivery_agent_number = "Your delivery agent phone number"; // Your delivery agent phone number with country code.
const call_masking_number = "Your call masking number"; // Your call masking number provided by the Piopiy TeleCMI platform.
const customer_number = "Your customer number"; // Your customer phone number with country code.
const options = {
    duration: 10,       // (Optional) Maximum duration of the call in seconds, Number type
    timeout: 20,        // (Optional) Time to wait for the call to be answered, Number type
    loop: 1            // (Optional) Number of retry attempts if the call is not answered, Number type
};


piopiy.voice.call(delivery_agent_number, call_masking_number, customer_number, options)
    .then((res) => {
        console.log("Success response:", res);
    })
    .catch((error) => {
        console.error("Error:", error);
    });