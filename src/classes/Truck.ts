import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow {
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // Call the Vehicle constructor
    super(vin, color, make, model, year, weight, topSpeed, wheels);
    this.towingCapacity = towingCapacity;

    // Ensure the truck has exactly 4 wheels
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    }
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${this.make} ${this.model} is towing ${vehicle.make} ${vehicle.model}`);
    } else {
      console.log(`${vehicle.make} ${vehicle.model} is too heavy to tow.`);
    }
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`Towing Capacity: ${this.towingCapacity}`);
  }
}

export default Truck;
