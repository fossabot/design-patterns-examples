import { Injectable } from '@angular/core';

// Product interfaces
export interface Button {
  type: string;
  os: string;
  description: string;
}

export interface Checkbox {
  type: string;
  os: string;
  description: string;
}

// Abstract Factory interface
export interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Concrete Factory: Windows
export class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return {
      type: 'Button',
      os: 'windows',
      description: 'Rendering Windows Button'
    };
  }

  createCheckbox(): Checkbox {
    return {
      type: 'Checkbox',
      os: 'windows',
      description: 'Rendering Windows Checkbox'
    };
  }
}

// Concrete Factory: Mac
export class MacFactory implements GUIFactory {
  createButton(): Button {
    return {
      type: 'Button',
      os: 'mac',
      description: 'Rendering Mac Button'
    };
  }

  createCheckbox(): Checkbox {
    return {
      type: 'Checkbox',
      os: 'mac',
      description: 'Rendering Mac Checkbox'
    };
  }
}

@Injectable({
  providedIn: 'root'
})
export class GUIFactoryService {
  getFactory(os: string): GUIFactory {
    switch (os) {
      case 'windows':
        return new WindowsFactory();
      case 'mac':
        return new MacFactory();
      default:
        throw new Error('Unknown OS type');
    }
  }
}
