# Padrão Bridge - Angular 2+

Este exemplo demonstra o padrão Bridge em Angular 2+ usando formas e cores.

## Descrição

O padrão Bridge separa a abstração de um objeto de sua implementação para que ambos possam variar independentemente. Neste exemplo, formas (Círculo, Quadrado) podem ter diferentes cores (Vermelho, Azul) sem criar uma classe para cada combinação.

## Arquivos

- `shape-color.service.ts` - Serviço contendo as interfaces de forma e cor
- `bridge.component.ts` - Componente que usa formas coloridas
- `bridge.component.html` - Template do componente
- `bridge.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { BridgeComponent } from './bridge/angular2/bridge.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BridgeComponent],
  template: '<app-bridge></app-bridge>'
})
export class AppComponent {}
```

## Como Funciona

1. `Color` é a interface de implementação
2. `RedColor` e `BlueColor` são implementações concretas de cor
3. `Shape` é a abstração que contém uma referência para `Color`
4. `Circle` e `Square` são abstrações refinadas
5. Formas e cores podem variar independentemente
