# Exemplos de Padrões de Projeto

Uma coleção abrangente de implementações de padrões de projeto em Go, React.js, PHP, TypeScript, Java, AngularJS e Angular 2+.

## 📁 Estrutura do Repositório

Cada padrão de projeto está organizado em seu próprio diretório com implementações em sete linguagens de programação:

```
nome-do-padrao/
├── go/
├── reactjs/
├── php/
├── typescript/
├── java/
├── angularjs/
└── angular2/
```

## 🎨 Padrões de Projeto Incluídos

Este repositório inclui exemplos dos seguintes padrões de projeto:

### Padrões Criacionais
- **Factory Method** - Define uma interface para criar objetos, mas permite que as subclasses decidam qual classe instanciar
- **Abstract Factory** - Fornece uma interface para criar famílias de objetos relacionados sem especificar suas classes concretas
- **Builder** - Separa a construção de um objeto complexo de sua representação
- **Prototype** - Cria novos objetos clonando objetos existentes
- **Singleton** - Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a ela

### Padrões Estruturais
- **Adapter** - Permite que interfaces incompatíveis trabalhem juntas
- **Bridge** - Separa a abstração de um objeto de sua implementação
- **Composite** - Compõe objetos em estruturas de árvore para representar hierarquias parte-todo
- **Decorator** - Adiciona novas funcionalidades a objetos dinamicamente
- **Facade** - Fornece uma interface simplificada para um subsistema complexo
- **Flyweight** - Compartilha estado comum entre múltiplos objetos para economizar memória
- **Proxy** - Fornece um substituto ou intermediário para outro objeto para controlar o acesso

### Padrões Comportamentais
- **Chain of Responsibility** - Passa solicitações ao longo de uma cadeia de manipuladores
- **Command** - Encapsula uma solicitação como um objeto
- **Iterator** - Fornece uma maneira de acessar elementos sequencialmente sem expor a representação subjacente
- **Mediator** - Define um objeto que encapsula como os objetos interagem
- **Memento** - Captura e restaura o estado interno de um objeto
- **Observer** - Define uma dependência um-para-muitos entre objetos
- **State** - Permite que um objeto altere seu comportamento quando seu estado interno muda
- **Strategy** - Define uma família de algoritmos e os torna intercambiáveis
- **Template Method** - Define o esqueleto de um algoritmo em uma classe base
- **Visitor** - Separa algoritmos dos objetos nos quais eles operam

## 🚀 Uso

### Go
```bash
cd factory-method/go
go run main.go
```

### React.js
```javascript
import FactoryMethodExample from './factory-method/reactjs/FactoryMethod.jsx';

function App() {
  return <FactoryMethodExample />;
}
```

### PHP
```bash
cd factory-method/php
php FactoryMethod.php
```

### TypeScript
```bash
cd factory-method/typescript
ts-node FactoryMethod.ts
# ou compile primeiro
tsc FactoryMethod.ts
node FactoryMethod.js
```

### Java
```bash
cd factory-method/java
javac FactoryMethod.java
java FactoryMethod
```

### AngularJS
```bash
cd factory-method/angularjs
# Abra index.html em um navegador ou sirva com um servidor local
python -m http.server 8000
# Navegue para http://localhost:8000
```

### Angular 2+
```bash
cd factory-method/angular2
# Copie os arquivos para seu projeto Angular
# Importe o componente em seu app:
# import { FactoryMethodComponent } from './factory-method/angular2/factory-method.component';
# Adicione ao seu módulo ou use como componente standalone
```

## 📖 Descrições dos Padrões

### Factory Method
Cria objetos sem especificar a classe exata a ser criada. Exemplo: Fábrica de veículos que cria diferentes tipos de veículos (Carro, Bicicleta).

### Abstract Factory
Cria famílias de objetos relacionados. Exemplo: Fábrica de GUI que cria elementos de interface (Botão, Checkbox) para diferentes sistemas operacionais (Windows, Mac).

### Builder
Constrói objetos complexos passo a passo. Exemplo: Construir uma casa com fundação, estrutura, telhado e interior.

### Prototype
Cria novos objetos copiando protótipos existentes. Exemplo: Clonar documentos para criar novas cópias.

### Singleton
Garante que apenas uma instância de uma classe exista. Exemplo: Gerenciador de conexão com banco de dados.

### Adapter
Converte uma interface para outra. Exemplo: Adaptador de reprodutor de mídia que permite reproduzir diferentes formatos de arquivo (MP3, VLC, MP4).

### Bridge
Desacopla abstração da implementação. Exemplo: Formas (Círculo, Quadrado) com diferentes cores (Vermelho, Azul).

### Composite
Trata objetos individuais e composições uniformemente. Exemplo: Hierarquia organizacional com funcionários e gerentes.

### Decorator
Adiciona responsabilidades a objetos dinamicamente. Exemplo: Café com vários complementos (Leite, Açúcar).

### Facade
Fornece uma interface simplificada para um subsistema complexo. Exemplo: Sistema de computador com subsistemas de CPU, Memória e Disco Rígido.

### Flyweight
Compartilha estado comum entre múltiplos objetos para economizar memória. Exemplo: Editor de texto com formatação de caracteres (dados compartilhados de fonte, tamanho, cor).

### Proxy
Fornece um substituto ou intermediário para outro objeto para controlar o acesso. Exemplo: Proxy de imagem que carrega imagens preguiçosamente.

### Chain of Responsibility
Passa solicitações ao longo de uma cadeia de manipuladores. Exemplo: Sistema de tickets de suporte com múltiplos níveis de suporte.

### Command
Encapsula uma solicitação como um objeto. Exemplo: Controle remoto com comandos ligar/desligar para dispositivos.

### Iterator
Fornece uma maneira de acessar elementos sequencialmente sem expor a representação subjacente. Exemplo: Iterador de coleção para diferentes estruturas de dados.

### Mediator
Define um objeto que encapsula como os objetos interagem. Exemplo: Sala de chat onde usuários se comunicam através de um mediador.

### Memento
Captura e restaura o estado interno de um objeto. Exemplo: Editor de texto com funcionalidade desfazer/refazer.

### Observer
Define uma dependência um-para-muitos entre objetos. Exemplo: Estação meteorológica que notifica múltiplos displays.

### State
Permite que um objeto altere seu comportamento quando seu estado interno muda. Exemplo: Fluxo de trabalho de documento com estados rascunho, revisão e publicado.

### Strategy
Define uma família de algoritmos e os torna intercambiáveis. Exemplo: Sistema de pagamento com diferentes estratégias de pagamento (Cartão de Crédito, PayPal, Bitcoin).

### Template Method
Define o esqueleto de um algoritmo em uma classe base. Exemplo: Preparação de bebidas (Chá, Café) com etapas comuns.

### Visitor
Separa algoritmos dos objetos nos quais eles operam. Exemplo: Visitante de formas que calcula área ou desenha formas.

## 🛠️ Tecnologias

- **Go** - versão 1.16+
- **React.js** - versão 17+
- **PHP** - versão 7.4+
- **TypeScript** - versão 4.0+
- **Java** - versão 8+
- **AngularJS** - versão 1.8+
- **Angular 2+** - versão 14+ (componentes standalone)

## 📝 Licença

Este projeto é de código aberto e está disponível para fins educacionais.

## 🤝 Contribuindo

Sinta-se à vontade para contribuir adicionando mais padrões de projeto ou melhorando as implementações existentes!
