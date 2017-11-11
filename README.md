![Logo](https://cdn.glitch.com/5171376c-86da-44e1-9a88-d95867bc02c4%2Flogo.png?1493218008085)
# Code Test Exercise1

We value your time, so please only take an hour or two on this exercise. Do as much as you can, show us what you can do. 
It is supposed to be challenging and give us things to talk about in the next interview. Just try your best!

## Goal

`Car Co.` is fictional company looking to sell slightly used cars online directly to the customer. After the first sprint the user should be able to easily view and filter the limited selection of cars. Automation of the service will be limited at this point. 

The goal of this exercise is to expose car data in the sqlite database and build a simple UI to display the cars. The exercise is outlined in more detail in "The task" section below.


## Guidelines

* This is setup with nodejs and polymerjs to help you. Feel free to use any other language or libary. However this was done to save you time and show your ability and creativity.
* Feel free to make liberal use of the polymer library or anything you want. You don't need to reinvent the wheel.
* Let us now how you did and what you found challenging or interesting in [thoughts.md](THOUGHTS.md).


## The task

We want to expose car data in the back-end to display the data in our React app.

Sign in with Github(You can create a free account) or Facebook. (Top right)

Click "Remix" to clone the project. Use your name in the project title.  Example "john-smith-hsl-to-rgb"

Click "Show live"(Top left) to see the App running.

### Core tasks

1. In `elements/my-app.html`, display the cars in cards similar to the wireframes. See [Polymer](https://www.polymer-project.org/) site for information. (See wire frame )
    * Pick one browser and target either Desktop or Mobile.
    * The Polymer app is found in `elements`.
    * Remember that more elements can be created. Follow software principles, although we have started the project it's far from ideal.
    * Feel free to use additional front-end elements and libraries as you see fit. bower.json is where you can import polymer libary elements

2. In `routes/car.js`, extend the API endpoint and database to expose car milage data in the sqlite database.

    * The project already has sqlite3. `initdb.js` may help create this.
    * The sqllite3 has a query all function. 


3. Fetch and display the car mileage data, exposed by the API endpoint, in the polymer app.

    * The Polymer app is found in `elements/my-app.html`
    

### Bonus tasks

- Try to make it responsive for desktop and mobile (see the wireframes).

- Hookup filter controls from the wireframes the list of cars in the back-end and front-end.

    * Examples: price ranges, makes, models, etc. (You don't have to implement all of the them but one would be nice!)
    
### Wireframes

![UX](https://cdn.glitch.com/e2b0a8f5-dcef-47fc-a9cf-52c5e8f0bb62%2FWireframe.png?1493239950497)

#### Mobile
![Mobile wireframe one](https://cdn.glitch.com/e2b0a8f5-dcef-47fc-a9cf-52c5e8f0bb62%2FMobileWire%201.png?1493240597496)

![Mobile wireframe two](https://cdn.glitch.com/e2b0a8f5-dcef-47fc-a9cf-52c5e8f0bb62%2FMobileWire%202.png?1493240596843)

#### Desktop

![Desktop wireframe](https://cdn.glitch.com/e2b0a8f5-dcef-47fc-a9cf-52c5e8f0bb62%2FDesktopWire.png?1493240596507)

## Next steps

Please add your thoughts to `THOUGHTS.md`. Some questions are provided but feel free to add additional comments.

If you used a different language/framework, please include instructions here on how to run it.

Rename your project name to include your full name in the project title. Example "john-smith-hsl-to-rgb".

Copy the share link for your "Remix" and send it to [recruitment@softwareimaging.com](mailto:recruitment@softwareimaging.com).

## Tech stuff
The app consists of 3 main things A Database, a RESTful API and a client side app.

The Database is a simple SQLite3 data base this for dev purposes and is super portable. This is accessed on the Server side by the Nodejs/Express Rest API. 'initdb.js' Creates a new table each time the app is started.

The REST API is implemented in Express and NodeJS. This has Been mostly completed. 'routes/' contains the endpoint code. 'routes/index.js' Exposes anything in the public folder. You can place html, css, js and images in 'public/'.
The JSON returned contains make, model, price, image and year already. image is in url format on third part servers.

The Client side app is created in Polymer. 'elements/' should contain modules used to build up the app. You need to build the polymer app using 'npm run build' this will compile all the linked files from my-app and dump them in public so they can be loaded. 

## Who do I talk to?

Contact [recruitment@softwareimaging.com](mailto:recruitment@softwareimaging.com)

## Copyright

Copyright 2017 Software Imaging Limited.

Please do keep this exercise to yourself, so that we can use it in the future. :)
