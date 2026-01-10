# Padrão Builder - Angular 2+

Este exemplo demonstra o padrão Builder em Angular 2+ usando a construção de uma casa.

## Descrição

O padrão Builder separa a construção de um objeto complexo de sua representação. Neste exemplo, o `HouseBuilder` constrói uma casa passo a passo, definindo fundação, estrutura, telhado e interior.

## Arquivos

- `house-builder.service.ts` - Serviço contendo o builder e a classe House
- `builder.component.ts` - Componente que usa o builder
- `builder.component.html` - Template do componente
- `builder.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { BuilderComponent } from './builder/angular2/builder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BuilderComponent],
  template: '<app-builder></app-builder>'
})
export class AppComponent {}
```

## Como Funciona

1. `House` é o produto complexo sendo construído
2. `HouseBuilder` fornece métodos para construir cada parte da casa
3. O builder permite a construção passo a passo
4. O método `build()` retorna o produto final
5. O componente usa o builder para criar casas com diferentes configurações
