# Padrão Singleton - Angular 2+

Este exemplo demonstra o padrão Singleton em Angular 2+ usando um serviço de conexão de banco de dados.

## Descrição

O padrão Singleton garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a ela. Neste exemplo, o `DatabaseService` é implementado como singleton para garantir que apenas uma conexão de banco de dados exista em toda a aplicação.

## Arquivos

- `database.service.ts` - Serviço singleton que gerencia a conexão do banco de dados
- `singleton.component.ts` - Componente que usa o serviço singleton
- `singleton.component.html` - Template do componente
- `singleton.component.css` - Estilos do componente

## Uso

### Em uma Aplicação Angular Standalone

```typescript
import { Component } from '@angular/core';
import { SingletonComponent } from './singleton/angular2/singleton.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SingletonComponent],
  template: '<app-singleton></app-singleton>'
})
export class AppComponent {}
```

### Em uma Aplicação Angular Baseada em Módulos

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SingletonComponent } from './singleton/angular2/singleton.component';

@NgModule({
  imports: [BrowserModule, SingletonComponent],
  bootstrap: [SingletonComponent]
})
export class AppModule {}
```

## Como Funciona

1. O `DatabaseService` é decorado com `@Injectable({ providedIn: 'root' })`, o que o torna um singleton por padrão no sistema de injeção de dependência do Angular
2. Além disso, o construtor implementa o padrão singleton manualmente para demonstrar o conceito
3. A variável estática `instanceCount` rastreia quantas vezes o construtor foi chamado
4. Múltiplas injeções ou instanciações retornarão a mesma instância

## Executando o Exemplo

1. Copie estes arquivos para seu projeto Angular
2. Importe o `SingletonComponent` em seu app
3. Execute sua aplicação Angular com `ng serve`
4. Navegue até o componente para ver o padrão singleton em ação
