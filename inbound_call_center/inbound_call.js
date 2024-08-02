const express = require("express");
const { PiopiyAction } = require("piopiy");
const app = express();
app.use(express.json())


app.post('/inbound-call', (req, res) => {

    const action = new PiopiyAction();

    const multiple_agent_number = ["Your agent phone number", "Your agent phone number"]   // Multiple agent's phone number with country code
    const piopiy_number = "Your piopiy number"; // Your piopiy number provided by the Piopiy TeleCMI platform.

    const options = {
        duration: 10,       // (Optional) Maximum duration of the call in seconds
        timeout: 20,        // (Optional) Time to wait for the call to be answered
        loop: 1,            // (Optional) Number of retry attempts if the call is not answered
        ring_type: "group" // (Optional) Type of ringing for the call.
    };

    action.call(multiple_agent_number, piopiy_number, options)
    res.send(action.PCMO())
});

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});