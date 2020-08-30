# Documentação do projeto "Dados"
Trabalho proposto pelo Resilia. Fazer uma requisição para a API randomuser e criar um csv com n usuários a partir da mesma.
Desenvolvido por Ivan Valverde dos Santos Rodrigues.

# Requisitos

**Tenha instalado o Node.js em seu sistema**

# API provedora

**randomuser:** Fornece n usuários aleatórios com suas informações preenchidas. Link: https://randomuser.me/

# Objetivo da aplicação

Pode ser utilizada no teste de sistemas (Ex: povoar uma rede social)

# Módulos utilizados

## node-fetch

Módulo utilizado para utilizar o comando fetch dentro do node.
Link: https://www.npmjs.com/package/node-fetch

## csv-writer

Módulo utilizado para escrever um documento csv.
Link: https://www.npmjs.com/package/csv-writer

# Comandos utilizados para a criação do ambiente

**npm init:** início do monitoramento do gerenciador de pacotes no diretório ao qual você deseja criar o projeto;<br>
**npm install node-fetch --save:** instalando o node-fetch no diretório em questão;<br>
**npm i csv-writer --save:** instalando o csv-writer no diretório em questão;

## Modo de uso

Caso queira utilizar a aplicação, altere a variável *number_users_generated* (default = 5000) no arquivo index.js com o valor de usuários à serem puxados.
Querendo mudar as informações buscadas, alterar os atributos do objeto *apiObj* (checar informações da API em questão).
O código está levemente comentado para a melhor interpretação do mesmo.
Após realizar todas as etapas anteriores, escreva no terminal *node index.js* (rodando o programa).



