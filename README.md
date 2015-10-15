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





