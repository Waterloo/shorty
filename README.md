Shorty - URL shortner in node.js
=========================================

Shorty is a simple short URL generator built using Node.js , Express.js and Redis

![Shorty](https://farm9.staticflickr.com/8742/16730466119_6f0b290769.jpg)

Installation
----------------------------

**Pre-requistes**
for Running shorty you need:
 - [Node.js](https://github.com/joyent/node/wiki/installation "Installing Node.js")
 - [Redis](http://redis.io/topics/quickstart "Installing Redis")
 
 > **Note:**
You can also use:
 - free node.js hosting plan from [Heroku](http://heroku.com/)
 - free redis 25mb plan from [Redis lab](http://redislabs.com") , it can store about 75000 short urls

**Step 1 : **

Open Terminal (Ctrl+Alt+T on most Linux distributions) and clone the **shorty** repository from here

> git clone https://github.com/Waterloo/shorty

**Step 2 : **

Navigate into the cloned directory

> cd shorty

**Step 3 : **

Install the required modules from Node.js for **shorty**

> npm install

**Step 4 : **

If you have installed a Redis server, you have to manually start the server.

> redis-server

Note the port number from the commands that appear on the screen.

If you're using a hosted Redis service, the default port number would be 6379. This will be detailed on the service provider's end when you sign up for the service.

Once you get your ***redis-server*** running, you won't have a shell ($) prompt. To get the shell prompt back, you could use the **Ctrl+Z** combination to push the redis-server to the background and get your shell prompt back.

**Step 5 : **

Open **app.js** in a text editor of your choice (or an IDE) and replace the **port** to the port running the Redis server and **endpoint** to the host running the Redis server.

> Note : if you have *redis-server* running locally on your machine, the endpoint should be the loopback address of your localhost : 127.0.0.1.
> If you have a hosted redis service, the provider will provide you with a hostname which you can use as the endpoint.

> var client = redis.createClient(port, 'endpoint');

Replace the *password* with your Redis server password
> client.auth('password', function (err)

**Step 6 : **

With all the setup ready to roll, you can now run shorty from the terminal

> node app.js

The terminal will show you the address from where you can access the ***shorty*** interface.

Have fun shortening your favorite URLs with ***shorty***
