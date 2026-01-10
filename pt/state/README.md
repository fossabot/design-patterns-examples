# Padrão State - Angular 2+

Este exemplo demonstra o padrão State em Angular 2+ usando um fluxo de trabalho de documento.

## Descrição

O padrão State permite que um objeto altere seu comportamento quando seu estado interno muda. Neste exemplo, um documento passa por diferentes estados (Rascunho, Revisão, Publicado) e se comporta de forma diferente em cada estado.

## Arquivos

- `document-state.service.ts` - Serviço contendo os estados e o documento
- `state.component.ts` - Componente que usa o documento com estados
- `state.component.html` - Template do componente
- `state.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { StateComponent } from './state/angular2/state.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StateComponent],
  template: '<app-state></app-state>'
})
export class AppComponent {}
```

## Como Funciona

1. `DocumentState` é a interface que define comportamento para cada estado
2. Estados concretos (Draft, Review, Published) implementam comportamentos específicos
3. `Document` mantém uma referência ao estado atual
4. O documento delega operações ao objeto de estado atual
5. Transições de estado mudam o comportamento do documento
