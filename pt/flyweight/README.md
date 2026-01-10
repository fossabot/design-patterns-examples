# Padrão Flyweight - Angular 2+

Este exemplo demonstra o padrão Flyweight em Angular 2+ usando formatação de caracteres em um editor de texto.

## Descrição

O padrão Flyweight compartilha estado comum entre múltiplos objetos para economizar memória. Neste exemplo, a formatação de caracteres (fonte, tamanho, cor) é compartilhada entre caracteres para reduzir o uso de memória.

## Arquivos

- `character-formatting.service.ts` - Serviço contendo o flyweight e a fábrica
- `flyweight.component.ts` - Componente que usa a formatação de caracteres
- `flyweight.component.html` - Template do componente
- `flyweight.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { FlyweightComponent } from './flyweight/angular2/flyweight.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FlyweightComponent],
  template: '<app-flyweight></app-flyweight>'
})
export class AppComponent {}
```

## Como Funciona

1. `CharacterFormat` é o flyweight que armazena estado compartilhado
2. `FormatFactory` gerencia a criação e reutilização de formatos
3. Estado intrínseco (fonte, tamanho, cor) é compartilhado
4. Estado extrínseco (posição do caractere) é armazenado externamente
5. Múltiplos caracteres podem compartilhar o mesmo objeto de formato
