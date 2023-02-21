const Gpio = require('pigpio').Gpio;
const { insertPurchaseWithMotor } = require('./purchase');

//Requests
const motorOperation = async (req,res) => {
    const {candyId, size, userId} = req.body; //Get values from the Flutter app
    await insertPurchaseWithMotor(candyId, size, userId);

    //Once the purchase is done we need to  move the motor
    const pin = choosePinMotor(candyId); 
    if(pin !== 0){
        const motor = new Gpio(pin, {mode: Gpio.OUTPUT}); 
        motor.servoWrite(1000); //Open gate
        await time(size); //how long it will be opened
        motor.servoWrite(0); //Close
    }
}

//Functions
const choosePinMotor = (type) => {
    let motor;
    switch(type){
        case 'candy1': motor = 9; break; 
        case 'candy2': motor = 10; break;
        case 'candy3': motor = 20; break;
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