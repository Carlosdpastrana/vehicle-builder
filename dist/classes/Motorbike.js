// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
    // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        super();
        // TODO: Declare properties of the Motorbike class
        // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
        this.make = '';
        this.model = '';
        this.wheels = wheels;
        if (this.wheels.length !== 2) {
            this.wheels = [new Wheel(18, 'DefaultBrand'), new Wheel(18, 'DefaultBrand')];
        }
    }
    // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    wheelie() {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Motorbike
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
    printDetails() {
        super.printDetails();
        console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.brand} (${wheel.diameter} inches)`).join(', ')}`);
    }
}
// Export the Motorbike class as the default export
export default Motorbike;
