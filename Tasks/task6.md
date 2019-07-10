# Task 6

Create the profile ejs page

In this task, build the profile page.
This page must have one input field: to add new todo.
A button, to submit the todo. Which adds the todo and redirects to the prodile page again by making a post request on `/`.
Another button to signout from the app which will destroy the current session.

Each to-do must have three associated buttons with it: one to edit it, one to delete it, and another one to mark the to-do as "done", which will be indicated by some change in styling. Leave the functionality of these buttons for the later task.

Hint:

- Use for loop to show the number of to-dos which are associated with a user's id, which the app will get through a session when a user is logged in.

Route this page to `/`.

Use the below command to run your app:

```
npm run task6
```

Use the below command to test your app:

```
npm run test6
```
