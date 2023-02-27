const Gpio = require('pigpio').Gpio;

const moveMotor = async (req,res) => {

    const {candyValue, sizeValue} = req.body;

    //Once the purchase is done we need to  move the motor
    const pin = choosePinMotor(candyValue); 
    const amountOfTime = chooseAmountOfTime(sizeValue);
    if(pin !== 0){
        const motor = new Gpio(pin, {mode: Gpio.OUTPUT}); 
        motor.pwmWrite(100); //Move the motor
        await time(amountOfTime); //how long it will be moving
        motor.pwmWrite(0); //Stop the motor
    }
}

//Functions
const choosePinMotor = (type) => {
    let motor;
    switch(type){
        case '0': motor = 9; break; 
        case '1': motor = 10; break;
        case '2': motor = 20; break;
        default: motor = 0; break;
    }
    return motor;
}

const chooseAmountOfTime = (time) => {
    let amountOfTime;
    switch(time){
        case '0': amountOfTime = 4000; break; 
        case '1': amountOfTime = 8000; break;
        case '2': amountOfTime = 12000; break;
        default: amountOfTime = 0; break;
    }
    return amountOfTime;
}

const time = (miliseconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },miliseconds);
    });
}

module.exports = {
    moveMotor
}