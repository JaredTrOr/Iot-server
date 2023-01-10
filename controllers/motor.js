const Gpio = require('pigpio').Gpio;

//Requests
const motorOperation = (req,res) => {
    const {type, size} = req.body; //Get values from the Flutter app
    const pin = choosePinMotor(type); 

    if(pin !== 0){
        const motor = new Gpio(pin, {mode: Gpio.OUTPUT}); 
        motor.servoWrite(1000); //Open gate
        time(size); //how long it will be opened
        motor.servoWrite(0); //Close
    }
    
}

//Functions
const choosePinMotor = (type) => {
    let motor;
    switch(type){
        case 'peanut': motor = 7; break; 
        case 'candy': motor = 10; break;
        case 'chocolate': motor = 11; break;
        case 'gummie': motor = 12; break;
        default: motor = 0; break;
    }
    return motor;
}

const time = (miliseconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },miliseconds);
    });
}

const runMotor = () => {
    let increment = 500;
    let pulse = 1000;
    setTimeout(() => {
        motor.servoWrite(pulse);
        pulse += increment;
    },2);
}

module.exports = {
    motorOperation
}