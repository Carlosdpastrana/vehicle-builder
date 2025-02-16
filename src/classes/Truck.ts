// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  weight: number | undefined;
  towingCapacity: number;
  wheels: Wheel[];

  // TODO: Create a constructor that accepts the properties of the Truck class
  // TODO: The constructor should call the constructor of the parent class, Vehicle
  // TODO: The constructor should initialize the properties of the Truck class
  // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
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
    super();
    this.towingCapacity = towingCapacity;
    this.wheels = wheels;

    if (this.wheels.length !== 4) {
      this.wheels = [
        new Wheel(20, 'DefaultBrand'),
        new Wheel(20, 'DefaultBrand'),
        new Wheel(20, 'DefaultBrand'),
        new Wheel(20, 'DefaultBrand'),
      ];
    }
  }

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    const car = vehicle as Car;
    const vehicleDescription = `${car.make} ${car.model}`;
  
    if ('weight' in vehicle && vehicle.weight !== undefined && vehicle.weight <= this.towingCapacity) {
      console.log(`Towing ${vehicleDescription} successfully.`);
    } else {
      console.log(`${vehicleDescription} is too heavy to be towed.`);
    }
  }
  

  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Truck
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
  override printDetails(): void {
    super.printDetails();
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.brand} (${wheel.diameter} inches)`).join(', ')}`);
  }
}

// Export the Truck class as the default export
export default Truck;
