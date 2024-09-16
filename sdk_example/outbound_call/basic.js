const { Piopiy } = require("piopiy");
const piopiy = new Piopiy("your_app_id", "your_app_secret");

const customer_number = "Your customer number"; // Your customer phone number with country code.
const piopiy_number = "Your piopiy number"; // Your piopiy number provided by the Piopiy TeleCMI platform.
const agent_number = "Your agent phone number"; // Your agent phone number with country code.
const options = { duration: 10, timeout: 20, loop: 1, record: true };

const basic_call = async () => {
  const res = await piopiy.voice.call( customer_number, piopiy_number, agent_number, options );
};

basic_call();