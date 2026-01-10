# Padrão Chain of Responsibility - Angular 2+

Este exemplo demonstra o padrão Chain of Responsibility em Angular 2+ usando um sistema de tickets de suporte.

## Descrição

O padrão Chain of Responsibility passa solicitações ao longo de uma cadeia de manipuladores. Neste exemplo, tickets de suporte são processados por diferentes níveis de suporte (Básico, Técnico, Gerente) dependendo de sua complexidade.

## Arquivos

- `support-handler.service.ts` - Serviço contendo a cadeia de manipuladores
- `chain-of-responsibility.component.ts` - Componente que usa a cadeia
- `chain-of-responsibility.component.html` - Template do componente
- `chain-of-responsibility.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { ChainOfResponsibilityComponent } from './chain-of-responsibility/angular2/chain-of-responsibility.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChainOfResponsibilityComponent],
  template: '<app-chain-of-responsibility></app-chain-of-responsibility>'
})
export class AppComponent {}
```

## Como Funciona

1. `SupportHandler` é a interface base do manipulador
2. Manipuladores concretos (Basic, Technical, Manager) processam solicitações
3. Cada manipulador pode processar a solicitação ou passá-la adiante
4. A cadeia é configurada conectando os manipuladores
5. O componente envia solicitações para o primeiro manipulador da cadeia
