import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Call the Vehicle constructor
    super(vin, color, make, model, year, weight, topSpeed, wheels);

    // Ensure the motorbike has exactly 2 wheels
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    }
  }

  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`Wheels: ${this.wheels.length}`);
  }
}

export default Motorbike;
