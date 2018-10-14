# Mobile Web Specialist Restaurant Reviews App: Stage 1

This application is for restaurant reviews in New York's metropolitan area. The application allows users to filter through fixed results and view details on each restaurant.

## Run the application
1)
    * To retrieve the files you can fork and clone, or directly clone the repository from this page.
    * If you are downloading the files, unzip them, and extract the files to where you want them in your directory.
2)
    * In the directory you chose, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 
    
    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

    * Once your server is running, visit the site: `http://localhost:8000`. To view the project.
    
    #### Follow steps in either 2 Or 3
3)
    * Alternatively you can serve the files using http-server.

    * To install enter ```npm install http-server -g``` in your terminal.

    * In order for this work properly you'll need to change line 13 in the file dbhelper.js to read like this ```return `http://127.0.0.1:${port}/data/restaurants.json`;```.

    * Once http-server is installed and dbhelper.js has been changed enter ```http-server -p 8000 -o``` in your terminal to run the file server.
        * Note: the -p flag allows you to set the port to 8000 and the -o flag opens a tab in your default browser.
    
    * The application should now run.

    * For additional information on http-server visit [npm http-server](https://www.npmjs.com/package/http-server).


## Using the application
A list of restaurants will appear on the main page which can be filtered to display only desired results.

Clicking view details on a restaurant will bring you to a page that displays additional information about each restaurant.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). Click on the links for additional information on these technologies.