# To-Do List - Aplicacao PHP

## 📌 Sobre o Projeto
Este projeto é uma To-Do List desenvolvida em PHP com MySQL, permitindo que os usuários adicionem, editem e excluam tarefas.

## 🚀 Tecnologias Utilizadas
- PHP
- MySQL
- XAMPP (para ambiente local)

## 📂 Configuração do Ambiente
### 1️⃣ Requisitos
Antes de iniciar, certifique-se de ter instalado:
- [XAMPP](https://www.apachefriends.org/pt_br/index.html)
- Um navegador para acessar a aplicação

### 2️⃣ Clonando o Repositório
Abra o terminal e execute:
```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```

### 3️⃣ Configurando o Banco de Dados
1. Inicie o **XAMPP** e certifique-se de que o **Apache** e o **MySQL** estão rodando.
2. Acesse [phpMyAdmin](http://localhost/phpmyadmin/) (ou pode usar o workbench).
3. Crie um banco de dados chamado **to_do_list**.
4. Importe o arquivo **to_do_list.sql** localizado no repositório (app/assets/script.sql).

### 4️⃣ Configuração da Conexão com o Banco
O arquivo de conexão já está configurado para rodar no localhost com o seguinte padrão:
```php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'to_do_list');
```
Caso precise alterar as credenciais, edite o arquivo de conexão conforme sua necessidade.

### 5️⃣ Rodando a Aplicação
1. Copie a pasta do projeto para o diretório **htdocs** do XAMPP.
2. No navegador, acesse:
```
http://localhost/<NOME_DA_PASTA_DO_PROJETO>
```
importante ressaltar que o aplicativo está rodando com a porta 80 (padrão do xampp), altere caso necessário.

3. Agora, sua aplicação está pronta para uso! 🎉
