### Synopsis

Web App who consists of a form created with React. This form will take data from the user and register this data in a DataBase created with PostgreSql.
This DataBase consists in 3 table related within them. After insert the data you can enter the database you prior created and see the data.

### Installing and creating a database

You can download and install Postgres from the PostgreSql website. For Mac users, it is strongly recommended that you choose the Postgres.app option. It is much easier than the other options.

https://www.postgresql.org/download/

Follow the installation and when you need to choose an user and a password type for both  ' postgres '.

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

Go to your browser and in the web bar address type:

```
> http://localhost:8080/

```

### Usage

Fill the form and click in register.
After that you can enter your created database and type:

```
> select * from freelance;
  select * from jobs;
  select * from assignment;

```
to see the data inserted.
