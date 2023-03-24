const Gpio = require('pigpio').Gpio;
const motor1 = new Gpio(17, {mode: Gpio.OUTPUT});
const motor2 = new Gpio(18, {mode: Gpio.OUTPUT});

moveMotorBackForth();

async function moveMotorBackForth() {

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

    motor1.digitalWrite(0);
    motor2.digitalWrite(0);
    await time(1000);

    //BACK
    motor1.digitalWrite(0);
    motor2.digitalWrite(1);
    await time(2000);

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

/*
moveMotor()

async function moveMotor(){
    motor.pwmWrite(250);
    await time(500);
    motor.pwmWrite(250);
    await time(3000);
    motor.pwmWrite(0);
}*/

//PINES PWM , GPIO 18, 12, 13, 19