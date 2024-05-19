# Aplicação Django com React

Este é um projeto de exemplo que combina Django no backend e React no frontend.

## Pré-requisitos

Antes de rodar a aplicação, certifique-se de ter instalado o Node.js 18.x e o Python 3.11 em seu sistema.

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/https://github.com/venilson2/django-com-reactjs.git
    ```

2. Instale as dependências do Node.js:

    ```bash
    cd django-com-reactjs
    npm install
    ```

3. Instale as dependências do Python:

    ```bash
    pip install -r requirements.txt
    ```

## Rodando a aplicação

Para rodar a aplicação, você precisará iniciar tanto o servidor Django quanto o Webpack para compilar o código React.

### Iniciando o servidor Django

1. No diretório raiz do projeto, execute:

    ```bash
    python manage.py runserver
    ```

O servidor estará disponível em `http://localhost:8000`.

### Iniciando o Webpack

1. Abra outro terminal e navegue até o diretório raiz do projeto.

2. Execute o seguinte comando para iniciar o Webpack em modo watch:

    ```bash
    npm run watch
    ```

O Webpack irá compilar os arquivos do React e observar por mudanças.

### Acessando a aplicação

Com ambos os servidores rodando, você pode acessar a aplicação em `http://localhost:8000`.

## Encerrando a aplicação

Para encerrar a aplicação, pressione `Ctrl + C` nos terminais onde os servidores estão rodando.

