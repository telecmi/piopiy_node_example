const { Piopiy, PiopiyAction } = require("piopiy");
const piopiy = new Piopiy("your_app_id", "your_app_secret");
const action = new PiopiyAction();

const music_file = 'Your alert music file or file URL' // Your alert music file or file URL
const customer_number = "Customer number"; // Your customer phone number with country code.
const caller_id = "Your caller id" // Your call masking number provided by the Piopiy TeleCMI platform.
const alert_music_pcmo_function = action.PCMO() // Use this PCMO function to play your alert music.
const options = {
    duration: 10,       // (Optional) Maximum duration of the call in seconds
    timeout: 20,        // (Optional) Time to wait for the call to be answered
    loop: 1            // (Optional) Number of retry attempts if the call is not answered
};

action.playMusic(music_file);

piopiy.voice.call(customer_number, caller_id, alert_music_pcmo_function, options)
    .then(res => {
        console.log('Success response:', res);
    }).catch(error => {
        console.error('Error:', error);
    });