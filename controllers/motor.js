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
        motor.pwmWrite(100); //Move the motor
        await time(size); //how long it will be moving
        motor.pwmWrite(0); //Stop the motor
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
        },miliseconds * 1000);
    });
}

module.exports = {
    motorOperation
}