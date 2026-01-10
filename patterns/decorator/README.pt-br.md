# Padrão Decorator - Angular 2+

Este exemplo demonstra o padrão Decorator em Angular 2+ usando café com complementos.

## Descrição

O padrão Decorator adiciona responsabilidades a objetos dinamicamente. Neste exemplo, diferentes complementos (Leite, Açúcar, Creme) podem ser adicionados ao café sem alterar a classe base do café.

## Arquivos

- `coffee.service.ts` - Serviço contendo a interface de café e decoradores
- `decorator.component.ts` - Componente que usa os decoradores de café
- `decorator.component.html` - Template do componente
- `decorator.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { DecoratorComponent } from './decorator/angular2/decorator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DecoratorComponent],
  template: '<app-decorator></app-decorator>'
})
export class AppComponent {}
```

## Como Funciona

1. `Coffee` é a interface do componente base
2. `SimpleCoffee` é a implementação concreta do café
3. Decoradores (MilkDecorator, SugarDecorator) envolvem o café
4. Cada decorador adiciona funcionalidade sem modificar o objeto original
5. Decoradores podem ser combinados dinamicamente
