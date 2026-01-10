# Padrão Command - Angular 2+

Este exemplo demonstra o padrão Command em Angular 2+ usando um controle remoto.

## Descrição

O padrão Command encapsula uma solicitação como um objeto. Neste exemplo, um controle remoto executa comandos (Ligar, Desligar) em diferentes dispositivos sem conhecer os detalhes de implementação dos dispositivos.

## Arquivos

- `remote-control.service.ts` - Serviço contendo comandos e dispositivos
- `command.component.ts` - Componente que usa o controle remoto
- `command.component.html` - Template do componente
- `command.component.css` - Estilos do componente

## Uso

```typescript
import { Component } from '@angular/core';
import { CommandComponent } from './command/angular2/command.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommandComponent],
  template: '<app-command></app-command>'
})
export class AppComponent {}
```

## Como Funciona

1. `Command` é a interface que todos os comandos concretos implementam
2. Comandos concretos (OnCommand, OffCommand) encapsulam ações
3. `RemoteControl` é o invocador que executa comandos
4. Os dispositivos são os receptores que executam as ações reais
5. O componente configura e executa comandos através do controle remoto
