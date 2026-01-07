export abstract class Beverage {
  prepareBeverage(): string[] {
    const steps: string[] = [];
    steps.push(this.boilWater());
    steps.push(this.brew());
    steps.push(this.pourInCup());
    steps.push(this.addCondiments());
    return steps;
  }

  boilWater(): string {
    return 'Boiling water';
  }

  pourInCup(): string {
    return 'Pouring into cup';
  }

  abstract brew(): string;
  abstract addCondiments(): string;
}

export class Tea extends Beverage {
  brew(): string {
    return 'Steeping the tea';
  }

  addCondiments(): string {
    return 'Adding lemon';
  }
}

export class Coffee extends Beverage {
  brew(): string {
    return 'Dripping coffee through filter';
  }

  addCondiments(): string {
    return 'Adding sugar and milk';
  }
}
