# Padrão Strategy - Angular 2+

Este exemplo demonstra o padrão Strategy em Angular 2+ usando diferentes estratégias de pagamento.

## Descrição

O padrão Strategy define uma família de algoritmos e os torna intercambiáveis. Neste exemplo, diferentes estratégias de pagamento (Cartão de Crédito, PayPal, Bitcoin) podem ser usadas de forma intercambiável sem alterar o código cliente.

## Arquivos

- `payment-strategy.service.ts` - Serviço contendo as estratégias de pagamento
- `strategy.component.ts` - Componente que usa as estratégias
- `strategy.component.html` - Template do componente
- `strategy.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { StrategyComponent } from './strategy/angular2/strategy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StrategyComponent],
  template: '<app-strategy></app-strategy>'
})
export class AppComponent {}
```

## Como Funciona

1. `PaymentStrategy` é a interface que define o algoritmo
2. Estratégias concretas implementam diferentes métodos de pagamento
3. `ShoppingCart` usa uma estratégia para processar pagamentos
4. A estratégia pode ser alterada em tempo de execução
5. O componente seleciona e usa diferentes estratégias conforme necessário
