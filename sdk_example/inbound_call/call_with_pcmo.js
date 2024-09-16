const express = require("express");
const { PiopiyAction } = require("piopiy");
const app = express();
app.use(express.json())


app.post('/pcmo', (req, res) => {

    const action = new PiopiyAction();

    action.playMusic('https://example.com/your_music_file.wav');

    const agent_number = "Your agent phone number"; // Your agent phone number with country code.
    const piopiy_number = "Your piopiy number"; // Your piopiy number provided by the Piopiy TeleCMI platform.
    const options = { duration: 10, timeout: 20, loop: 1, record: true };

    action.call(agent_number, piopiy_number, options);

    res.send(action.PCMO());
});

app.listen(3001, () => { console.log(`Server is running on port 3001`) })