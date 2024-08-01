const { Piopiy, PiopiyAction } = require("piopiy");
const express = require("express");
const app = express();
app.use(express.json());

const piopiy = new Piopiy("your_app_id", "your_app_secret");
const action = new PiopiyAction();

const music_file = 'Your order confimation music file or music file URL'; // Your order confimation music file or music file URL
const ngrok_url = 'http://ngrok.order.confirmation.io/dtmf'; // add your local ngrok URL
const customer_number = "Your customer number"; // Your customer phone number with country code.
const piopiy_number = "Your piopiy number"; // Your piopiy number provided by the Piopiy TeleCMI platform.
const order_confimation_pcmo_function = action.PCMO(); // Use this PCMO function to confirm your order input.
const options = {
    max_digit: 1,       // (Optional) Maximum number of digits expected from the user input
    max_retry: 1,       // (Optional) Maximum number of retry attempts
    timeout: 1,        // (Optional) Time allowed between DTMF inputs in seconds
};

// Initiate the call
action.playGetInput(ngrok_url, music_file, options);

piopiy.voice.call(customer_number, piopiy_number, order_confimation_pcmo_function)
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
        action.playMusic("Your example order confirmation music file or music file URL");
        res.send(action.PCMO());
    } else {
        action.playMusic("Your example order cancellation music file or music file URL");
        res.send(action.PCMO());
    }
});

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});