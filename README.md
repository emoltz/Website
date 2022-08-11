# My Blog/Website
This is an attempt to make a fullstack website "from scratch" (I use quotes because I'm using frameworks).
This file is a blog about making a blog. Not very fun to read. But good to document!

## July 20th, 2022
So I'm starting by initializing a Django project and building some really basic HTML to get everything up and running. Next is to make a place for all the blog entries and link them to the database. 

## July 26, 2022
So I took 6 days or so off of this project to learn Django a bit better. I made some smaller sample projects and now I feel better equipped to frame this project up. 

Everything is working as expected now, and all that is left to do is... make the site. 

## July 27, 2022
Got the blog models to work with the database and feed stuff to the front end. 
Also, just got **markdown support** baby!! Very exciting. 

## July 28
Got a new navbar working, pushed to main branch. Also got `scss` support, which will be helpful with the more complex frontend animations and things. It was a complicated process -- there is a Django-specific tool that compiles the `scss` into `css` that needed to be installed manually, so there was some trial and error. 

<img width="597" alt="Screen Shot 2022-07-29 at 8 09 25 AM" src="https://user-images.githubusercontent.com/33405530/181755452-1d05e030-1af0-4038-bc58-75a0b1596d66.png">

## July 31
Getting all the backend models to work properly... just a slow grind!

## August 2
Trying to add some features that will allow me to edit the blog post fromt he front end if I am logged in to the site. This should be finished soon! I am also taking some time to learn `THREE.js` to add some custom 3D models to the site :). 

## August 5
Still learning THREE.js. In the meantime, I made an edit button for the blog but it only works if you are logged in/authenticated. 

## August 6
After 3 hours of tinkering, I finally got webpack to play nice with Django and I am now able to put 3D stuff on the website :). 

## August 10
Learning a lot of THREE.js for the site. It's going well, but I am learning that integrating it into my site that was not up-front meant for 3D is extremely challenging. I may be a bit over my head, so I might want to scale back my ambitions a bit. I am thinking I will still install webpack, but use the 3D elements in a much more subtle way. Perhaps I could make a new nav bar that is 3D-animated. 

## August 11
Strange issue with the `canvas` element -- some items outside the canvas were clickable and some items were not. Very confusing. Finally figured out that it was a CSS issue: I needed to add a `position: relative;` property to the footer class. 
Got the 3D elements working and pushed to master. 
<img width="1128" alt="Screen Shot 2022-08-11 at 12 08 50 PM" src="https://user-images.githubusercontent.com/33405530/184179370-fa3837c0-fc75-4636-861e-4e4fa36c4bab.png">
