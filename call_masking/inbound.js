const express = require("express");
const { PiopiyAction } = require("piopiy");
const app = express();
app.use(express.json())


app.post('/inbound', (req, res) => {

    const action = new PiopiyAction();

    const customer_number = "Customer number"; // Your customer phone number with country code, Number type
    const caller_id = "Caller ID"; // Your caller ID, Number type
    const options = {
        duration: 10,       // (Optional) Maximum duration of the call in seconds
        timeout: 20,        // (Optional) Time to wait for the call to be answered
        loop: 1            // (Optional) Number of retry attempts if the call is not answered
    }; // Object type

    action.call(customer_number, caller_id, options)
    res.send(action.PCMO())
});

app.listen(3001);