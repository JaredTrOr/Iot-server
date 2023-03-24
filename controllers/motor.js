const Gpio = require('pigpio').Gpio;

const moveMotor = async (req,res) => {

    const {candyValue, sizeValue} = req.body;

    //Epic music pls
    //const pin = choosePinMotor(candyValue);  this one needs to be fixed later

    const amountOfTime = chooseAmountOfTime(sizeValue);
    
    try{
        const motor1 = new Gpio(18, {mode: Gpio.OUTPUT}); 
        const motor2 = new Gpio(19, {mode: Gpio.OUTPUT});
        
        //BACK
        motor1.digitalWrite(1);
        motor2.digitalWrite(0);
        await time(500);

        //STOP
        motor1.digitalWrite(0);
        motor2.digitalWrite(0);
        await time(1000);

        //FORTH
        motor1.digitalWrite(0);
        motor2.digitalWrite(1);
        await time(500);

        //MOVE AGAIN WITH THE CORRESPONDING TIME
        motor1.digitalWrite(1);
        motor2.digitalWrite(0);
        await time(amountOfTime);

        motor1.digitalWrite(0);
        motor2.digitalWrite(0);
        
        res.json({success: true, msg: `Operacion exitosa`});
    }catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }

}

//Functions
const choosePinMotor = (type) => {
    let motor;
    switch(type){
        case '0': motor = 10; break; 
        case '1': motor = 10; break;
        case '2': motor = 10; break;
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