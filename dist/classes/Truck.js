// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// The Truck class should extend the Vehicle class and implement the AbleToTow interface
class Truck extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, towingCapacity, wheels) {
        // Pass the common vehicle properties to the Vehicle constructor
        super(vin, color, make, model, year, weight, topSpeed);
        // Initialize truck-specific properties
        this.towingCapacity = towingCapacity;
        // Set wheels, or create default wheels if the array is not exactly 4
        this.wheels =
            wheels.length === 4
                ? wheels
                : [
                    new Wheel(20, 'DefaultBrand'),
                    new Wheel(20, 'DefaultBrand'),
                    new Wheel(20, 'DefaultBrand'),
                    new Wheel(20, 'DefaultBrand'),
                ];
    }
    // Implement the tow method from the AbleToTow interface
    tow(vehicle) {
        const vehicleDescription = `${vehicle.make} ${vehicle.model}`;
        if (vehicle.weight <= this.towingCapacity) {
            console.log(`Towing ${vehicleDescription} successfully.`);
        }
        else {
            console.log(`${vehicleDescription} is too heavy to be towed.`);
        }
    }
    // Override the printDetails method from the Vehicle class
    printDetails() {
        super.printDetails();
        console.log(`Towing Capacity: ${this.towingCapacity}`);
        console.log(`Wheels: ${this.wheels
            .map((wheel) => `${wheel.brand} (${wheel.diameter} inches)`)
            .join(', ')}`);
    }
}
export default Truck;
