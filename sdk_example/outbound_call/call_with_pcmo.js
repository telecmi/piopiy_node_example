const { Piopiy, PiopiyAction } = require("piopiy");
const piopiy = new Piopiy("your_app_id", "your_app_secret");

const action = new PiopiyAction();

action.playMusic('https://example.com/your_music_file.wav');

const customer_number = "Your customer number"; // Your customer phone number with country code.
const piopiy_number = "Your piopiy number"; // Your piopiy number provided by the Piopiy TeleCMI platform.
const agent_number = "Your agent phone number"; // Your agent phone number with country code.
const options = { duration: 10, timeout: 20, loop: 1, record: true };

action.call(agent_number, piopiy_number, options);

const pcmo_function = action.PCMO(); // PCMO actions to execute during the call

const pcmo_call = async () =>{
    const res = await piopiy.voice.call( customer_number, piopiy_number, pcmo_function, options)
}

pcmo_call()