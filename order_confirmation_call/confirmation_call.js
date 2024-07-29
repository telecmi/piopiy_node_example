const { Piopiy, PiopiyAction } = require("piopiy");
const piopiy = new Piopiy(2222347, "305b5635-a510-4d3a-9da5-debe67f56140");
const action = new PiopiyAction();

const music_file = '1616411005409Alsalamawav396b9450-8afe-11eb-9e22-398ab0e302cd_piopiy.wav' // add your alert music file or file URL
const local_url = 'http://ngrok.telecmi.io/music' // add your local ngrok URL

action.playGetInput(local_url, music_file, { max_digit: 2 })


piopiy.voice.call(
    919999999999,         // Agent phone number with country code
    918000000000,         // Caller ID
    action.PCMO(),        // Use this to play your alert audio
    {
        duration: 10,       // (Optional) Maximum duration of the call in seconds
        timeout: 20,        // (Optional) Time to wait for the call to be answered
        loop: 1,            // (Optional) Number of retry attempts if the call is not answered
        record: true        // (Optional) Whether to record the call
    }
).then(res => {
    console.log('Call connected, answer URL:', res);
}).catch(error => {
    console.error('Error:', error);
});