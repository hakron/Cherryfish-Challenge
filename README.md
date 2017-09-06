
###Installing and creating a database

You can download and install Postgres from the PostgreSql website. For Mac users, it is strongly recommended that you choose the Postgres.app option. It is much easier than the other options.

https://www.postgresql.org/download/

Follow the instalation and whem you need to choose an user and a password type for both  ' postgres '.

After successful installation you can create a new database with the createdb command in the cmd.

```
> createdb cities

```
After creating a database, you can open psql, the Postgres command line, to start working with it.

```
> psql cities

```
You can also write your commands in a file and use psql to run them.

```
> psql -U postgres -d cities -f setup.sql

```
If you are having problems with the user, use this command.

```
> create -U postgres -sP (and the name of the user in your machine)

```
### Start the web Application

```
> npm install
> node index.js

```
### Run the web-application

If you dont have the
Go to your browser and in the web bar address type:

```
> http://localhost:8080/

```
