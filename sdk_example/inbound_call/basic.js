const express = require("express");
const { PiopiyAction } = require("piopiy");
const app = express();
app.use(express.json())


app.post('/basic', (req, res) => {

    const action = new PiopiyAction();
    const agent_number = "Your agent phone number";   // Your agent's phone number with country code
    const piopiy_number = "Your piopiy number"; // Your piopiy number provided by the Piopiy TeleCMI platform.

    const options = {
        duration: 10,       // (Optional) Maximum duration of the call in seconds
        timeout: 20,        // (Optional) Time to wait for the call to be answered
        loop: 1,            // (Optional) Number of retry attempts if the call is not answered
        record: true        // (Optional) Whether to record the call
    };

    action.call(agent_number, piopiy_number, options)
    res.send(action.PCMO())
});

app.listen(3001, () => { console.log(`Server is running on port 3001`) })