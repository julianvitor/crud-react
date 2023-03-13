# Esse projeto é um CRUD (Create, Read, Update, Delete) desenvolvido com React - Redux. Ele consiste em uma aplicação web que permite o cadastro, visualização, edição e exclusão de usuários.

Os principais arquivos do projeto são:

O arquivo store.tsx, localizado na pasta store, que contém a configuração da store do Redux. Ele é responsável por combinar os reducers e criar a store que será utilizada na aplicação.
A pasta users, dentro da pasta store, que contém os arquivos responsáveis pela lógica de gerenciamento dos usuários, incluindo actions, reducer, types e thunks.
Os arquivos dentro da pasta components, que contém os componentes da aplicação: UserList, UserRegister, UserEdit e UserDelete. Cada componente é responsável por uma funcionalidade específica da aplicação.
O arquivo App.tsx, localizado na pasta src, que define as rotas da aplicação e renderiza os componentes.
Além disso, o projeto utiliza outras bibliotecas importantes como o react-router-dom para gerenciar as rotas da aplicação, o axios para fazer as requisições à API e o react-hook-form para validar os formulários.

# Para utilizar a aplicação
# execute em seu terminal:
* git clone https://github.com/julianvitor/crud-react.
* cd crud-react
* npm install
* npm start
