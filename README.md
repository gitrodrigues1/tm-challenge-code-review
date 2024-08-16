Teste Code review e Funcional:

Um desenvolvedor com pouca experiência começou a criar a API, porém não seguiu boas práticas de design de código e arquitetura.

Usando sua experiência em desenvolvimento de software, patterns de code design, faça um Code Review completo. Leve em conta que essa API irá crescer bastante, terá muitos contribuidores e precisa ter uma boa manutenibilidade. Sinta-se à vontade para criticar, modificar e melhorar o código.

Realize um Fork do projeto e abra uma PR própria em seu fork com a review.


### API Previsão do Tempo :mostly_sunny:
O objetivo desta API é disponibilizar a consulta da previsão do tempo da cidade informada, no momento atual.

#### Estrutura do projeto
O projeto será desenvolvido com base nos conceitos de boas práticas de programação atuais, utilizando:

- Clean Architecture
- SOLID
- DDD
- TDD

Para tanto, será adotada a seguinte estrutura:

```bash

src
  |-- weather
      |-- application/    #casos de uso
          |-- ports/
          |-- use-cases/

      |-- domain/         #entidades
          |-- entities/
          |-- repositories/

      |-- infrastructure/ #conexão meio externo
          |-- adapters/

      |-- presentation/   #controladores
          |-- controllers/
          |-- dtos/
```

`domain` - camada mais isolada do sistema. livre de frameworks.

`application` - camada que contém regras de negócio e interfaces.

`infrasctructure` - camada que possui comunicação com o meio externo. onde ficam as implementações das interfaces.

`presentation` - camada de exibição dos dados ao meio externo. onde ficam os controllers. 

---

#### Estrutura da API 🔧
GET `/weather/city/:name`
retorna a previsão da cidade informada.

GET `/weather?cities=:cidade1&cidade2`
retorna listagem de previsões das cidades informadas.

GET `/weather/average/:city`
retorna a média da temperatura da cidade informada. 

---

#### Como iniciar o projeto 🚀

instalando dependências

``` bash
$ npm install
```

iniciando o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

---

#### Possui alguma dúvida ?
Caso possua alguma dificuldade, encontrou algum problema, ou tem alguma sugestão ? Crie uma **issue** e pergunte o que achar necessário. 