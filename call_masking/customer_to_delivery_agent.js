const express = require("express");
const { PiopiyAction } = require("piopiy");
const app = express();
app.use(express.json())


app.post('/inbound', (req, res) => {

    const action = new PiopiyAction();

    const delivery_agent_number = "Delivery agent phone number"; // Your delivery agent phone number with country code.
    const call_masking_number = "Call masking number"; // Your call masking number provided by the Piopiy TeleCMI platform.
    const options = {
        duration: 10,       // (Optional) Maximum duration of the call in seconds
        timeout: 20,        // (Optional) Time to wait for the call to be answered
        loop: 1            // (Optional) Number of retry attempts if the call is not answered
    };

    action.call(delivery_agent_number, call_masking_number, options)
    res.send(action.PCMO())
});

app.listen(3001);