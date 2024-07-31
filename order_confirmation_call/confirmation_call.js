const { Piopiy, PiopiyAction } = require("piopiy");
const express = require("express");
const app = express();
app.use(express.json());

const piopiy = new Piopiy("your_app_id", "your_app_secret");
const action = new PiopiyAction();

const music_file = 'Your alert music file or file URL'; // Your alert music file or file URL
const ngrok_url = 'http://ngrok.order.confirmation.io/dtmf'; // add your local ngrok URL
const customer_number = "Customer number"; // Your customer phone number with country code.
const caller_id = "Your caller id"; // Your call masking number provided by the Piopiy TeleCMI platform.
const order_confimation_pcmo_function = action.PCMO(); // Use this PCMO function to confirm your order input.
const options = {
    duration: 10,       // (Optional) Maximum duration of the call in seconds
    timeout: 20,        // (Optional) Time to wait for the call to be answered
    loop: 1             // (Optional) Number of retry attempts if the call is not answered
};
const play_get_input_options = {
    max_digit: 1,       // (Optional) Maximum number of digits expected from the user input
    max_retry: 1        // (Optional) Maximum number of retry attempts
};

// Initiate the call
action.playGetInput(ngrok_url, music_file, play_get_input_options);

piopiy.voice.call(customer_number, caller_id, order_confimation_pcmo_function, options)
    .then(res => {
        console.log('Success response:', res);
    }).catch(error => {
        console.error('Error:', error);
    });

// Set up the webhook server

app.post('/dtmf', (req, res) => {

    const action = new PiopiyAction();
    const dtmf = req.body.dtmf; // Assuming DTMF input is in the body of the request

    if (dtmf == 1) {
        action.playMusic("Your example music file or file URL");
        res.send(action.PCMO());
    } else {
        action.playMusic("Your example music file or file URL");
        res.send(action.PCMO());
    }
});

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});