# Padrão Proxy - Angular 2+

Este exemplo demonstra o padrão Proxy em Angular 2+ usando carregamento preguiçoso de imagens.

## Descrição

O padrão Proxy fornece um substituto ou intermediário para outro objeto para controlar o acesso. Neste exemplo, o `ImageProxy` controla o acesso a imagens reais, carregando-as apenas quando necessário.

## Arquivos

- `image-proxy.service.ts` - Serviço contendo o proxy e a imagem real
- `proxy.component.ts` - Componente que usa o proxy de imagem
- `proxy.component.html` - Template do componente
- `proxy.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { ProxyComponent } from './proxy/angular2/proxy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProxyComponent],
  template: '<app-proxy></app-proxy>'
})
export class AppComponent {}
```

## Como Funciona

1. `Image` é a interface que o sujeito e o proxy implementam
2. `RealImage` é o objeto real que realiza operações custosas
3. `ImageProxy` controla o acesso ao objeto real
4. O proxy carrega a imagem real apenas quando necessário
5. O componente interage com o proxy como se fosse o objeto real
