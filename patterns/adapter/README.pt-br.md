# Padrão Adapter - Angular 2+

Este exemplo demonstra o padrão Adapter em Angular 2+ usando um reprodutor de mídia.

## Descrição

O padrão Adapter permite que interfaces incompatíveis trabalhem juntas. Neste exemplo, o `MediaAdapter` permite que um reprodutor de áudio reproduza diferentes formatos de arquivo (MP3, VLC, MP4) através de uma interface comum.

## Arquivos

- `media-player.service.ts` - Serviço contendo o adaptador e as implementações de reprodutores
- `adapter.component.ts` - Componente que usa o serviço de reprodutor
- `adapter.component.html` - Template do componente
- `adapter.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { AdapterComponent } from './adapter/angular2/adapter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AdapterComponent],
  template: '<app-adapter></app-adapter>'
})
export class AppComponent {}
```

## Como Funciona

1. `MediaPlayer` é a interface alvo que o cliente usa
2. `AdvancedMediaPlayer` é a interface existente que precisa ser adaptada
3. `MediaAdapter` adapta a interface avançada para a interface padrão
4. O componente usa o reprodutor através da interface comum sem conhecer os detalhes de implementação
