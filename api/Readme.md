<h1 align=center>
  <img src="../.github/proffy-banner.png"/>
  <br /><br />
  🚀 Proffy API 🚀
  <br /><br />
  <a href="https://insomnia.rest/run/?label=Proffy%20API&uri=http%3A%2F%2Flocalhost%3A3333%2F" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</h1>

<h2>
  👨‍💻 Tecnologias utilizadas
</h2>
<ul>
  <li><h3><a href="https://nodejs.org/pt-br/">NodeJS</a></h3></li>
  <li><h3><a href="https://www.typescriptlang.org/">Typescript</a></h3></li>
  <li><h3><a href="https://expressjs.com/pt-br/">Express</a></h3></li>
  <li><h3><a href="http://knexjs.org/">Knex</a></h3></li>
  <li><h3><a href="https://www.sqlite.org/index.html">Sqlite</a></h3></li>
</ul>

<h2>
  🚀 Funcionalidades
</h2>

<ul>
  <h3>Cadastro de professores</h3>
  
  <p><strong>POST: </strong> http://localhost:3333<strong>/classes</strong></p>
  
  ```javascript
  // request body
  {
    "name": "John Doe",
    "avatar": "<image_url>",
    "whatsapp": "1234566",
    "bio": "Apaixonado por conhecimento!",
    "subject": "Química",
    "cost": 45,
    "schedule": [
      { "week_day": 0, "from": "8:00", "to": "10:00" },
      ...
    ]
  }
  ```

  <strong>Response: status 201</strong>
  
  <h3>Busca de professores</h3>
  
  <p><strong>GET: </strong>http://localhost:3333/classes?<strong>subject=artes&week_day=0&time=07:00</strong></p>
  <strong>Response: </strong>

  ```javascript
    [
      {
        "name": "John Doe",
        "avatar": "<image_url>",
        "whatsapp": "1234566",
        "bio": "Apaixonado por conhecimento!",
        "subject": "Artes",
        "cost": 45,
        "schedule": [
          { "week_day": 0, "from": "07:00", "to": "10:00" },
          ...
        ]
      },
      ...
    ]
  ```

  <h3>Criar conexões entre alunos e professores</h3>
  
  <p><strong>POST: </strong> http://localhost:3333<strong>/connections</strong></p>

  ```javascript
  // request body
  {
    "user_id": 5,
  }
  ```

  <strong>Response: status 201</strong>

  <h3>Listar quantidade de conexões</h3>
  <p><strong>GET: </strong>http://localhost:3333/<strong>connections</strong></p>

   <strong>Response: </strong>

  ```javascript
    {
      "total": 13
    }
  ```
</ul>

<h2>
  🔍 Requisitos de software
</h2>

<ul>
  <li><h3><a href="https://nodejs.org/pt-br/">NodeJS</a></h3></li>
  <li><h3><a href="https://yarnpkg.com/">Yarn</a></h3></li>
</ul>

<h2>
  🤔 Como rodar o projeto?
</h2>

```bash
# Clone o repositório para ter uma cópia do código em sua máquina *apenas uma vez funciona para todos*

$ git clone https://github.com/lucascprazeres/Proffy 

# Navegue até a pasta do projeto web

$ cd Proffy/api

# Carregue as dependências

$ yarn

# Rode o projeto

$ yarn start
```
<br />

<h3 align=center>Happy hacking 💜</h3> 