# Padrão Visitor - Angular 2+

Este exemplo demonstra o padrão Visitor em Angular 2+ usando operações em formas geométricas.

## Descrição

O padrão Visitor separa algoritmos dos objetos nos quais eles operam. Neste exemplo, diferentes operações (calcular área, desenhar) podem ser aplicadas a formas geométricas sem modificar as classes de formas.

## Arquivos

- `shape-visitor.service.ts` - Serviço contendo o visitante e as formas
- `visitor.component.ts` - Componente que usa o visitante
- `visitor.component.html` - Template do componente
- `visitor.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { VisitorComponent } from './visitor/angular2/visitor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VisitorComponent],
  template: '<app-visitor></app-visitor>'
})
export class AppComponent {}
```

## Como Funciona

1. `Visitor` é a interface que declara métodos de visita
2. Visitantes concretos implementam operações específicas
3. `Shape` é o elemento que aceita visitantes
4. Formas concretas chamam o método visitante apropriado
5. Novas operações podem ser adicionadas criando novos visitantes
