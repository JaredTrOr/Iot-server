const Gpio = require('pigpio').Gpio;
const servo = new Gpio(17, {mode: Gpio.OUTPUT});

moveServo();

async function moveServo() {
    servo.servoWrite(1300);
    await time(500);
    servo.servoWrite(2300);
    await time(1000);
}

function time(miliseconds){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },miliseconds);
    });
}