// Vehicle class that implements Driveable interface
class Vehicle {
    // Constructor for the Vehicle class
    constructor(vin, color, make, model, year, weight, topSpeed) {
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.started = false;
        this.currentSpeed = 0;
    }
    // Method to print vehicle details
    printDetails() {
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight}`);
        console.log(`Top Speed: ${this.topSpeed}`);
        console.log(`Color: ${this.color}`);
        console.log(`Started: ${this.started}`);
        console.log(`Current Speed: ${this.currentSpeed} mph`);
    }
    // Method to start the vehicle
    start() {
        this.started = true;
        console.log('Vehicle started');
    }
    // Method to accelerate the vehicle
    accelerate(change) {
        // Check if the vehicle is started
        if (this.started) {
            this.currentSpeed += change;
            console.log(`Vehicle accelerated to ${this.currentSpeed} mph`);
        }
        else {
            console.log('Start the vehicle first');
        }
    }
    // Method to decelerate the vehicle
    decelerate(change) {
        // Check if the vehicle is started
        if (this.started) {
            this.currentSpeed -= change;
            console.log(`Vehicle decelerated to ${this.currentSpeed} mph`);
        }
        else {
            console.log('Start the vehicle first');
        }
    }
    // Method to stop the vehicle
    stop() {
        this.currentSpeed = 0;
        this.started = false;
        console.log('Vehicle stopped');
    }
    // Method to turn the vehicle
    turn(direction) {
        // Check if the vehicle is started
        if (this.started) {
            console.log(`Vehicle turned ${direction}`);
        }
        else {
            console.log('Start the vehicle first');
        }
    }
    // Method to reverse the vehicle
    reverse() {
        // Check if the vehicle is started
        if (this.started) {
            console.log('Vehicle reversed');
        }
        else {
            console.log('Start the vehicle first');
        }
    }
}
// Export the Vehicle class
export default Vehicle;
