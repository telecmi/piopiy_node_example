const { Piopiy, PiopiyAction } = require("piopiy");
const piopiy = new Piopiy("your_app_id", "your_app_secret");
const action = new PiopiyAction();

const music_file = 'Your alert music file or music file URL' // Your alert music file or music file URL
const customer_number = "Customer number"; // Your customer phone number with country code.
const piopiy_number = "Your piopiy number" // Your piopiy number provided by the Piopiy TeleCMI platform.
const alert_music_pcmo_function = action.PCMO() // Use this PCMO function to play your alert music.

action.playMusic(music_file);

piopiy.voice.call(customer_number, piopiy_number, alert_music_pcmo_function, options)
    .then(res => {
        console.log('Success response:', res);
    }).catch(error => {
        console.error('Error:', error);
    });