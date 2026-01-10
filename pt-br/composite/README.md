# Padrão Composite - Angular 2+

Este exemplo demonstra o padrão Composite em Angular 2+ usando uma hierarquia organizacional.

## Descrição

O padrão Composite compõe objetos em estruturas de árvore para representar hierarquias parte-todo. Neste exemplo, uma organização contém funcionários e departamentos, onde departamentos podem conter outros departamentos e funcionários.

## Arquivos

- `organization.service.ts` - Serviço contendo a estrutura composta
- `composite.component.ts` - Componente que usa a estrutura organizacional
- `composite.component.html` - Template do componente
- `composite.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { CompositeComponent } from './composite/angular2/composite.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CompositeComponent],
  template: '<app-composite></app-composite>'
})
export class AppComponent {}
```

## Como Funciona

1. `OrganizationComponent` é a interface base para folhas e compostos
2. `Employee` é o componente folha (não tem filhos)
3. `Department` é o componente composto (pode conter filhos)
4. Clientes tratam objetos individuais e composições uniformemente
5. O componente pode trabalhar com toda a hierarquia através de uma interface comum
