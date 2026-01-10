# Padrão Facade - Angular 2+

Este exemplo demonstra o padrão Facade em Angular 2+ usando um sistema de computador.

## Descrição

O padrão Facade fornece uma interface simplificada para um subsistema complexo. Neste exemplo, a `ComputerFacade` simplifica a operação de inicializar um computador, que envolve múltiplos subsistemas (CPU, Memória, Disco Rígido).

## Arquivos

- `computer-facade.service.ts` - Serviço contendo a fachada e os subsistemas
- `facade.component.ts` - Componente que usa a fachada
- `facade.component.html` - Template do componente
- `facade.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { FacadeComponent } from './facade/angular2/facade.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FacadeComponent],
  template: '<app-facade></app-facade>'
})
export class AppComponent {}
```

## Como Funciona

1. Subsistemas complexos (CPU, Memory, HardDrive) têm suas próprias interfaces
2. `ComputerFacade` fornece uma interface simplificada
3. A fachada coordena as operações dos subsistemas
4. O componente usa apenas a fachada sem conhecer os subsistemas
5. Isso reduz a complexidade e o acoplamento no código cliente
