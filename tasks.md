# Tasks

1. Build the basic MVC structure of the app

   - Check if all the directories exist
   - Check if `app.js, views/profile.ejs, views/signin.ejs, signup.ejs` exist
   - Check if app running on port 4000

2. Create sqlite database in `backend/databases/sqlite.js` named `database.sqlite` in the same directory.

   - Check if sqlite file exists

3. Create the Signin ejs page

   - Make get request on `/signin`
   - Frontend testing through JSDOM of input tags, and button tags

4. Create the Signup ejs page

   - Make get request on `/signup`
   - Frontend testing through JSDOM of input tags, and button tags.

5. Create profile page

   - Make get request on `/`
   - Frontend testing through JSDOM of input tags, and button tags.

6. Make forms

   - Post requests on `/signin` and `/signup`
   - Check if redirects to `/`

7. Add posts for different users

   - Test database

8. Add sessions and middlewares
   - Test sessions through supertest
