// import Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
// TODO: The Car class should extend the Vehicle class
class Car extends Vehicle {
    // TODO: Create a constructor that accepts all required properties
    // TODO: Call the parent class constructor using the super keyword
    // TODO: Assign the wheels parameter to the wheels property
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        // Call the parent constructor with vehicle details
        super(vin, color, make, model, year, weight, topSpeed);
        this.wheels = wheels;
    }
    // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the wheels
    printDetails() {
        super.printDetails();
        console.log(`Wheels: ${this.wheels
            .map((wheel) => `${wheel.brand} (${wheel.diameter} inches)`)
            .join(', ')}`);
    }
}
// export the Car class as the default export
export default Car;
