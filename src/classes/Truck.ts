// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class should extend the Vehicle class and implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  towingCapacity: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    wheels: Wheel[]
  ) {
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
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleDescription = `${vehicle.make} ${vehicle.model}`;
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Towing ${vehicleDescription} successfully.`);
    } else {
      console.log(`${vehicleDescription} is too heavy to be towed.`);
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(
      `Wheels: ${this.wheels
        .map((wheel) => `${wheel.brand} (${wheel.diameter} inches)`)
        .join(', ')}`
    );
  }
}

export default Truck;

