# Padrão Prototype - Angular 2+

Este exemplo demonstra o padrão Prototype em Angular 2+ usando clonagem de documentos.

## Descrição

O padrão Prototype cria novos objetos clonando objetos existentes. Neste exemplo, documentos podem ser clonados para criar novas cópias com o mesmo conteúdo, mas que podem ser modificadas independentemente.

## Arquivos

- `document-prototype.service.ts` - Serviço contendo os protótipos de documentos
- `prototype.component.ts` - Componente que usa a clonagem de documentos
- `prototype.component.html` - Template do componente
- `prototype.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { PrototypeComponent } from './prototype/angular2/prototype.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PrototypeComponent],
  template: '<app-prototype></app-prototype>'
})
export class AppComponent {}
```

## Como Funciona

1. `Prototype` é a interface que define o método clone
2. Documentos concretos implementam a clonagem
3. Novos objetos são criados copiando protótipos existentes
4. Clones são independentes do original
5. O componente clona documentos em vez de criá-los do zero
