# apple_store_charts

## To do steps:

1. Learn Mongo and Mongoid
2. Figure out how to parse data from CSV to hashes
3. Seed data to database
4. Play around with Mongoid build in methods in rails console
5. Create main structure for the page
6. Style main elements
7. Display actual data from database
8. Show rating stars by rating
9. Create methods for top-paid, top-free, top-all apps
10. Create AJAX calls to display needed apps on .chart-option click
11. Limit display by 50 apps only
12. Complete all UI
13. Deploy to Heroku

## App design structure

Application will have basically 1 controller MobileAppsController, and 1 model MobileApp. Because we don't have any relationship between apps, and we won't be creating new apps, or adding new fields to the database, I will keep it simple.

We need only 1 rout, to display main page with top charts. All options (top paid, top free, top all) will be displayed on AJAX call, so without refreshing the page.

MobileApp model will be responsible for algorythms that will help us get top paid, top free and top all applications.

First top 50 apps should be displayed only, and when you scroll to the bottom, it should load 50 more apps.

## Changes made while working

- I needed more routs for all (top paid, top free, top all)
- Controller is responsible for algorythms that will help us get top paid, top free and top all applications, not model as I thought at the beggining
- I added extra field to database with total downloads, to sort top apps

## Technologies used

1. Ruby on Rails
2. MongoDB, Mongoid
3. Handlebars (to render apps)
4. CSS animations
5. Font Awesome (for rating stars)
6. Bootstrap (grid system, and alignment classes)
7. JavaScript (AJAX, jQuery, Handlebars Helpers)


## Issues

1. Page is loading too slow, if you wait more than 5 sec, please reload the page manualy
2. When you start scrolling and meet bottom of the page, sometimes it doesn't load 50 more apps, you need to scroll a little up and then to the bottom again, and it will work
3. App was tested only on Google Chrome, not sure how it works in other browsers


## Heroku link

[heroku_app_store_charts](https://shielded-escarpment-3039.herokuapp.com/)


## Steps to deploy Rails Mongoid app to Heroku

1. Create account on [mongolab](https://mongolab.com/)
2. In your account in "MongoDB Deployments" click on "Create new" (to create database there)
3. In Mongolab click on your database and "Add database user", there you will create username and password, it can be whatever you want
4. Create heroku
  ```
    heroku create
  ```
5. Add remote
  ```
    git remote add heroku
  ```
6. In Mongolab click on database and find URI
  ```
    mongodb://<dbuser>:<dbpassword>@ds039674.mongolab.com:39674/apple_store_charts_db
  ```
7. Go to your Heroku account, find your app, and in Settings find "Reveal Config Vars", create config var like:
  ```
    MONGOLAB_URI
  ```
and then copy your URI in the second input, with your user name and password
  ```
    mongodb://<dbuser>:<dbpassword>@ds039674.mongolab.com:39674/apple_store_charts_db
  ```
then click "Add"
8. Check if you have any unstaged/uncommited files
  ```
    git status
  ```
9. If necessary
  ```
    git add, git commit
  ```
10. Push code to heroku
  ```
    git push heroku master
  ```

If you are using Mongoid 5, make sure in your mongoid.yml file where you have production: instead of "sessions:" should be "clients:" otherwise it won't work.





