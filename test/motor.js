const Gpio = require('pigpio').Gpio;
const motor = new Gpio(10, {mode: Gpio.OUTPUT});

moveMotor()

async function moveMotor(){
    motor.pwmWrite(100);
    await time(10000);
    motor.pwmWrite(0);
}


function time(miliseconds){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },miliseconds);
    });
}
