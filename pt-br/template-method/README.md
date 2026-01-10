# Padrão Template Method - Angular 2+

Este exemplo demonstra o padrão Template Method em Angular 2+ usando preparação de bebidas.

## Descrição

O padrão Template Method define o esqueleto de um algoritmo em uma classe base. Neste exemplo, a preparação de bebidas (Chá, Café) segue etapas comuns, mas algumas etapas são implementadas de forma diferente pelas subclasses.

## Arquivos

- `beverage.service.ts` - Serviço contendo o método template e as bebidas
- `template-method.component.ts` - Componente que usa o método template
- `template-method.component.html` - Template do componente
- `template-method.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { TemplateMethodComponent } from './template-method/angular2/template-method.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemplateMethodComponent],
  template: '<app-template-method></app-template-method>'
})
export class AppComponent {}
```

## Como Funciona

1. `Beverage` é a classe abstrata que define o método template
2. O método template define a estrutura do algoritmo
3. Etapas abstratas são implementadas pelas subclasses
4. `Tea` e `Coffee` implementam etapas específicas
5. O componente chama o método template que coordena as etapas
