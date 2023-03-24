const Gpio = require('pigpio').Gpio;

const moveMotor = async (req,res) => {

    const {candyValue, sizeValue} = req.body;

    //Once the purchase is done we need to  move the motor
    const pin = choosePinMotor(candyValue); 

    const amountOfTime = chooseAmountOfTime(sizeValue);
    if(pin !== 0){
        const motor1 = new Gpio(17, {mode: Gpio.OUTPUT});
        const motor2 = new Gpio(18, {mode: Gpio.OUTPUT});

        //BACK
        motor1.digitalWrite(0);
        motor2.digitalWrite(1);
        await time(500)

        motor1.digitalWrite(0);
        motor2.digitalWrite(0);
        await time(1000);

        //FORTH
        motor1.digitalWrite(1);
        motor2.digitalWrite(0);
        await time(500);

        //PAUSE 
        motor1.digitalWrite(0);
        motor2.digitalWrite(0);
        await time(1000);

        //MOVE OF THE CORRESPONDING TIME
        motor1.digitalWrite(0);
        motor2.digitalWrite(1);
        await time(amountOfTime);

        motor1.digitalWrite(0);
        motor2.digitalWrite(0);

        res.json({success: true, msg: 'The motor has been moved'});
    }
    else{
        res.json({success: false, msg: 'The motor didnt move'});
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
        case '0': amountOfTime = 1000; break; 
        case '1': amountOfTime = 2000; break;
        case '2': amountOfTime = 3000; break;
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