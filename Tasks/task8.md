# Task 8

Add required middlewares

In this task, you need to create middleware functions in `backend/controllers/middle.js` file.
These middleware must be passed in the post or get requests in the routes file such that, if there already is an session active, in other words, if there already is a signed in user, the `/signup` and `/signin` page must redirect to `/` i.e, the profile page.
And if, there is no session, the `/` page must redirect to the `/signin` page.  
Check the following example:

middle.js:

```js
const redirectprofile = (req, res, next) => {
  if (req.session.user) {
    res.redirect("/");
  } else {
    next();
  }
};
```

routes.js:

```js
router.route("/signin").get(middle.redirectprofile, signincon.signinpage);
```

The `redirectprofile` function in middle.js checks if there is an session active and redirects to `/`, otherwise the next function is executed.
This function is passed as a middleware in `routes.js` file for the get request on signin page, whose connector is in the file `signincon.js`.
Thus ensuring there isn't a session, before making get request on `/signin`.

Use the below command to run your app:

```
npm run task8
```

Use the below command to test your app:

```
npm run test8
```
