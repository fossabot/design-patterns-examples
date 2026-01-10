# Padrão Iterator - Angular 2+

Este exemplo demonstra o padrão Iterator em Angular 2+ usando uma coleção de itens.

## Descrição

O padrão Iterator fornece uma maneira de acessar elementos sequencialmente sem expor a representação subjacente. Neste exemplo, o iterador permite percorrer uma coleção de itens sem expor sua estrutura interna.

## Arquivos

- `collection-iterator.service.ts` - Serviço contendo o iterador e a coleção
- `iterator.component.ts` - Componente que usa o iterador
- `iterator.component.html` - Template do componente
- `iterator.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { IteratorComponent } from './iterator/angular2/iterator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IteratorComponent],
  template: '<app-iterator></app-iterator>'
})
export class AppComponent {}
```

## Como Funciona

1. `Iterator` é a interface que define métodos de navegação
2. `ConcreteIterator` implementa a lógica de iteração
3. `Collection` é a interface agregada
4. `ConcreteCollection` armazena elementos e cria iteradores
5. O componente percorre a coleção sem conhecer sua estrutura interna
