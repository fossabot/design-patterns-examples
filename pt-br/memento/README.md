# Padrão Memento - Angular 2+

Este exemplo demonstra o padrão Memento em Angular 2+ usando um editor de texto com desfazer/refazer.

## Descrição

O padrão Memento captura e restaura o estado interno de um objeto. Neste exemplo, o editor de texto pode salvar snapshots de seu conteúdo e restaurá-los posteriormente, implementando funcionalidade de desfazer/refazer.

## Arquivos

- `text-editor.service.ts` - Serviço contendo o editor e o memento
- `memento.component.ts` - Componente que usa o editor
- `memento.component.html` - Template do componente
- `memento.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { MementoComponent } from './memento/angular2/memento.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MementoComponent],
  template: '<app-memento></app-memento>'
})
export class AppComponent {}
```

## Como Funciona

1. `TextEditor` é o originador que cria mementos de seu estado
2. `EditorMemento` armazena o estado do editor
3. `History` é o zelador que gerencia mementos
4. O editor pode salvar snapshots e restaurá-los
5. O componente usa desfazer/refazer através da história
