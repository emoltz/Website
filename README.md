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
Getting all the backend models to work properly... just a slow grind! Also used https://github.com/jrief/django-sass-processor to compress the SCSS.

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

## August 18
After some more time to learn THREE.js, I finally was able to create the models I wanted in Blender and import them into a test directory where I could apply the Bloom effects and etc. It doesn't look *exactly* how I'd like, but hopefully I can improve on that later. Now comes the work of swapping out the dummy models for the custom ones, which will be a challenge since I believe they are different object types (the same functions won't work, I will have to re-write everything). 

I also want to re-make the text boxes on the main page to look like computer windows. 

## August 19
Made some old-school macos 7-style windows:
<img width="835" alt="Screen Shot 2022-08-19 at 11 03 57 AM" src="https://user-images.githubusercontent.com/33405530/185648900-0291517c-c959-4b08-a6c5-9b1c946a8868.png">

## August 20
The bloom effect is causing more problems than it is solving, so I am going to go back and re-do that section of the website. Sucks because of how long I spent trying to get the bloom render pass to work effectively. But alas...

Update -- the new mesh looks ok with the bloom, and I only need 6 for the sample rate. Just using simpler models with an emission instead of a color seems to work pretty well. It's not exactly what I had in mind -- I wanted a toon effect, but when I assign the toon material to the custom mesh, it just turns black. Not sure why. I will work on that later though.