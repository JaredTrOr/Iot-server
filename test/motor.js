const Gpio = require('pigpio').Gpio;
const motor1 = new Gpio(18, {mode: Gpio.OUTPUT}); 
const motor2 = new Gpio(27, {mode: Gpio.OUTPUT});

moveMotor()

async function moveMotor(){
    //BACK
    motor1.digitalWrite(1);
    motor2.digitalWrite(0);
    motor1.pwmWrite(250);
    await time(500);

    //BACK
    motor1.digitalWrite(0);
    motor2.digitalWrite(1);
    motor2.pwmWrite(250);
    await time(500);

    motor1.digitalWrite(0);
    motor2.digitalWrite(0);
}


function time(miliseconds){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },miliseconds);
    });
}
