# Padrão Factory Method - Angular 2+

Este exemplo demonstra o padrão Factory Method em Angular 2+ usando uma fábrica de veículos.

## Descrição

O padrão Factory Method define uma interface para criar objetos, mas permite que as subclasses decidam qual classe instanciar. Neste exemplo, o `VehicleFactoryService` cria diferentes tipos de veículos (Carro, Bicicleta, Caminhão) sem que o cliente precise conhecer a classe específica.

## Arquivos

- `vehicle-factory.service.ts` - Serviço contendo a fábrica e as classes de veículos
- `factory-method.component.ts` - Componente que usa o serviço de fábrica
- `factory-method.component.html` - Template do componente
- `factory-method.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { FactoryMethodComponent } from './factory-method/angular2/factory-method.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FactoryMethodComponent],
  template: '<app-factory-method></app-factory-method>'
})
export class AppComponent {}
```

## Como Funciona

1. `Vehicle` é a interface do produto que todos os veículos concretos implementam
2. `Car`, `Bike` e `Truck` são produtos concretos
3. `VehicleFactoryService` é a fábrica que cria veículos com base no tipo
4. O componente usa a fábrica sem conhecer as classes de veículos concretos
