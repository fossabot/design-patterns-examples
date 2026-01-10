# Padrão Mediator - Angular 2+

Este exemplo demonstra o padrão Mediator em Angular 2+ usando uma sala de chat.

## Descrição

O padrão Mediator define um objeto que encapsula como os objetos interagem. Neste exemplo, a `ChatRoom` atua como mediador, permitindo que usuários se comuniquem sem se conhecerem diretamente.

## Arquivos

- `chat-mediator.service.ts` - Serviço contendo o mediador e os usuários
- `mediator.component.ts` - Componente que usa o mediador
- `mediator.component.html` - Template do componente
- `mediator.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { MediatorComponent } from './mediator/angular2/mediator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MediatorComponent],
  template: '<app-mediator></app-mediator>'
})
export class AppComponent {}
```

## Como Funciona

1. `ChatMediator` é a interface do mediador
2. `ChatRoom` é o mediador concreto que coordena a comunicação
3. `User` é o colega que se comunica através do mediador
4. Usuários enviam mensagens para o mediador, não diretamente para outros usuários
5. O mediador roteia mensagens para os destinatários apropriados
