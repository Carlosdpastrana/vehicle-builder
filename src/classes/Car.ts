// import Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Car class should extend the Vehicle class
class Car extends Vehicle {
  // TODO: Declare the wheels property
  // TODO: The type of wheels should be Wheel[]
  wheels: Wheel[];

  // TODO: Create a constructor that accepts all required properties
  // TODO: Call the parent class constructor using the super keyword
  // TODO: Assign the wheels parameter to the wheels property
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
    // Call the parent constructor with vehicle details
    super(vin, color, make, model, year, weight, topSpeed);
    this.wheels = wheels;
  }

  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the wheels
  override printDetails(): void {
    super.printDetails();
    console.log(
      `Wheels: ${this.wheels
        .map((wheel) => `${wheel.brand} (${wheel.diameter} inches)`)
        .join(', ')}`
    );
  }
}

// export the Car class as the default export
export default Car;
