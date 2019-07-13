# Task 2

Create sqlite database file in `backend/databases/sqlite.js` named `database.sqlite` in the same directory.

Write a js programme in `backend/databases/sqlite.js` to create an sqlite database in the same directory, named `database.sqlite`.

The DB will have two tables: `users` (for users) and `lists` (for to-dos).

The structure of the tables is given below:

user table:

| id (PRIMARY KEY) | name     | email    | password |
| ---------------- | -------- | -------- | -------- |
| (NUMBER)         | (STRING) | (STRING) | (STRING) |
|                  |          |          |          |

lists table:

| id (PRIMARY KEY) | item     | edit      | done     | user_id  |
| ---------------- | -------- | --------- | -------- | -------- |
| (NUMBER)         | (STRING) | (BOOLEAN) | (STRING) | (NUMBER) |
|                  |          |           |          |          |

Note that the id column in the table is automatically generated, so you need not to specify that.

Use the below command to run your app:

```
npm run app
```

Use the below command to test your app:

```
npm run test2
```
