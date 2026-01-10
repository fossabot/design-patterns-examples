# Padrão Abstract Factory - Angular 2+

Este exemplo demonstra o padrão Abstract Factory em Angular 2+ usando uma fábrica de elementos de interface gráfica.

## Descrição

O padrão Abstract Factory fornece uma interface para criar famílias de objetos relacionados sem especificar suas classes concretas. Neste exemplo, criamos elementos de UI (Botão, Checkbox) para diferentes sistemas operacionais (Windows, Mac) sem que o código cliente conheça as classes específicas.

## Arquivos

- `gui-factory.service.ts` - Serviço contendo a fábrica abstrata e as implementações concretas
- `abstract-factory.component.ts` - Componente que usa o serviço de fábrica
- `abstract-factory.component.html` - Template do componente
- `abstract-factory.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { AbstractFactoryComponent } from './abstract-factory/angular2/abstract-factory.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AbstractFactoryComponent],
  template: '<app-abstract-factory></app-abstract-factory>'
})
export class AppComponent {}
```

## Como Funciona

1. `GUIFactory` é a interface da fábrica abstrata
2. `WindowsFactory` e `MacFactory` são fábricas concretas
3. `Button` e `Checkbox` são interfaces de produtos abstratos
4. Produtos concretos implementam interfaces específicas do SO
5. O componente usa a fábrica sem conhecer as implementações específicas
