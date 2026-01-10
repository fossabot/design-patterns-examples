# Padrão Observer - Angular 2+

Este exemplo demonstra o padrão Observer em Angular 2+ usando uma estação meteorológica.

## Descrição

O padrão Observer define uma dependência um-para-muitos entre objetos. Neste exemplo, a estação meteorológica notifica múltiplos displays quando os dados meteorológicos mudam.

## Arquivos

- `weather-station.service.ts` - Serviço contendo o sujeito e os observadores
- `observer.component.ts` - Componente que usa a estação meteorológica
- `observer.component.html` - Template do componente
- `observer.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { ObserverComponent } from './observer/angular2/observer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ObserverComponent],
  template: '<app-observer></app-observer>'
})
export class AppComponent {}
```

## Como Funciona

1. `Subject` é a interface que gerencia observadores
2. `WeatherStation` é o sujeito concreto que mantém o estado
3. `Observer` é a interface que recebe atualizações
4. Displays concretos implementam a interface Observer
5. Quando o estado muda, todos os observadores são notificados automaticamente
