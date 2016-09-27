````
                              ______ _____ _____ _____                               
                              | ___ \  _  |  __ \  _  |                              
                              | |_/ / | | | |  \/ | | | ___  ___ _ ____   _____ _ __ 
                              |  __/| | | | | __| | | |/ __|/ _ \ '__\ \ / / _ \ '__|
                              | |   \ \_/ / |_\ \ \_/ /\__ \  __/ |   \ V /  __/ |   
                              \_|    \___/ \____/\___/ |___/\___|_|    \_/ \___|_|   
````
<div align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/Pokemon%20GO-0.35.0-blue.svg?style=flat-square" />
  </a>
  <a href="https://github.com/maierfelix/POGOserver/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/GNU GPL-License-blue.svg?style=flat-square" />
  </a>
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square" alt="Stability" />
  </a>
</div>

<img width="25%" src="http://i.imgur.com/7VhPleu.png" />
<img width="24%" src="http://i.imgur.com/E82eqtk.png" />
<img width="24%" src="http://i.imgur.com/H692S9d.png" />
<img width="25%" src="http://i.imgur.com/LGrdUeH.png" />

# Getting started

## Setup

Copy and rename ``cfg.js.example`` to ``cfg.js``.

Open ``cfg.js`` and fill the following fields:

````js
DOWNLOAD_PROVIDER: "GOOGLE";
DOWNLOAD_USERNAME: "USERNAME";
DOWNLOAD_PASSWORD: "PASSWORD";
````

## Tunneling setup
The pokemon go app traffic has to get forwarded manually to this custom server. Download [rastapasta](https://github.com/rastapasta)'s [Pokemon Go Xposed](https://github.com/rastapasta/pokemon-go-xposed/releases) app and follow the installation instructions [here](https://github.com/rastapasta/pokemon-go-xposed#how-to-use-it).

## Database setup

To setup a database connection, open ``cfg.js`` and change the database login credentials:

````js
MYSQL_PORT: 3306,
MYSQL_HOST_IP: "127.0.0.1",
MYSQL_DB_NAME: "pogosql",
MYSQL_USERNAME: "root",
MYSQL_PASSWORD: "",
````

The required database tables get generated automatically.

## Server setup

You need at minimum [Node.js](https://nodejs.org/en/) version 6.x.

Open up a terminal and enter ``npm run boot`` to start the server or ``npm run api`` to start the web-api.

### Setting up API services

First of all you should create A API Services through google.
first go to [API Console](https://console.developers.google.com)


When you see allot of colums select the colum Google Maps Javascript Api. 

![](http://appworks.nl/wp-content/uploads/2016/03/google-api-console.jpg)

 go to Dashboard Tab and press on google maps JavaScript API Enable.

![](http://docs.aws.amazon.com/mobile-hub/latest/developerguide/images/google_enable_api.png)

 After That go to credentials Tab and select Create credentials ----> API Key.

![](http://www.daimto.com/wp-content/uploads/2015/08/CreateAPIKey.png)


 When the API Key has been Created.
 Copy the Key and press the button close.

![](https://1.bp.blogspot.com/-adP4dNGRpKk/V3lTxu2f-GI/AAAAAAAAEE8/pkHfCKdsvQg0Wr19V_XQcFEo3r7NzGzDACLcB/s1600/apikey.png)


 alright after the Services has been setup we need to edit some configs.

Download or clone the https://github.com/maierfelix/POGOserver/tree/api 
when you have the files place them into You're Xamp/Htdocs. should be located C:\Program Files\Xamp\Htdocs.

### Edit the configs 

first open up the POGOserver/cfg.js i Preffer with Notepad ++ and scrol down when you see.

  // Google maps api key
  GMAPS_KEY: "AIzaSyDF9rkP8lhcddBtvH9gVFzjnNo13WtmJIM", replace this API Ket with You're API Key.
  
  And press save.

than open up into API/cfg.js and search for



  API:
  
    HOST: "127.0.0.1",
    
    PORT: 3000,
    
    ROUTE: "/api"



  GMAPS: {
  
    API_KEY: "XXXXX", Enter API Key Here
    
    BASE_ZOOM: 20,
    
    BASE_LAT: 39.18875480450959,
    
    BASE_LNG: -96.58109955489635

  And press save.

When everything has been edited, go to You're internet Browser and go to localhost.

![](https://cdn.discordapp.com/attachments/216235545393627136/224472383208030210/unknown.png)

Login with root and leave You're password empty and click login.

![](https://images-2.discordapp.net/.eJwFwQEKwyAMAMC_-ABjjdHZ34g6K7SNaAaFsb_v7qs-81S7OkTG2gFKX5ln0Ut4plZ1Y25nTaMvnfmCJJLycdVbFtjNWyRyhBG9DRt6sNZFNBiNC_QyhoKHd39q0eNu6vcHvrYh1w.d5EmSAetGKkh_vj3lnqgHqhVwYQ.png)

## Docker setup

1. Download ``Dockerfile``, ``cfg.js.example`` and ``supervisord.conf`` from github.
2. Place ``Dockerfile``, ``cfg.js.example`` and ``supervisord.conf`` into the same folder. Rename ``cfg.js.example`` to ``cfg.js``.
3. Modify ``cfg.js`` to your requirements as described above.
4. Create a container and run it.
5. Open a bash prompt, enter: ``cd /POGOserver/ and ./run-linux.sh.
6. Connect the Pokemon Go app to the server.
7. Done.

Note: Instead of automatically mapping the ports, map them static, so they don't change after reboot.
