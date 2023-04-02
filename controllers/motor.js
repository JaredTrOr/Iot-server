const Gpio = require('pigpio').Gpio;

const moveMotor = async (req,res) => {

    const {candyValue, sizeValue} = req.body;

    const pin = choosePinMotor(candyValue);
    const servo = new Gpio(pin, {mode: Gpio.OUTPUT}); 

    const amountOfTime = chooseAmountOfTime(sizeValue);
    
    try{
        servo.servoWrite(1300);
        await time(amountOfTime);
        servo.servoWrite(2300);
        await time(1000);
        res.json({success: true, msg: `Operacion exitosa`});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }

}

//Functions
const choosePinMotor = (type) => {
    let motor;
    switch(type){
        case '0': motor = 17; break; 
        case '1': motor = 18; break;
        default: motor = 0; break;
    }
    return motor;
}

const chooseAmountOfTime = (time) => {
    let amountOfTime;
    switch(time){
        case '0': amountOfTime = 500; break; 
        case '1': amountOfTime = 800; break;
        case '2': amountOfTime = 1000; break;
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