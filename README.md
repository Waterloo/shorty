Shorty - URL shorter in node.js , express and Redis
=========================================

Shorty is a simple short URL generator built using Node.js , Express.js and Redis

![Shorty](https://farm9.staticflickr.com/8742/16730466119_6f0b290769.jpg)


Lets Get it Running
----------------------------
**Step 1**

for Running shorty you need:
 - [Node.js](https://github.com/joyent/node/wiki/installation "Installing Node.js")
 - [Redis](http://redis.io/topics/quickstart "Installing Node.js")


> **Note:**
You can also use:
	  -   free node.js hosting plan from [Heroku](http://heroku.com/)
	  -  free redis 25mb plan from [Redis lab](http://redislabs.com") , it can store about 75k short urls

**Step 2:**

Open Terminal and navigate to directory containing **shorty** source code and install all the required modules for **shorty** by typing 

> **npm install**

**Step 3:**
	open the **app.js** in an IDE or  text editor and replace the **port** to the port running the Redis server and **Endpoint** to the host running the Redis server 

> var client = redis.createClient(port, 'endpoint');

Replace the password with your Redis server password
>client.auth('password', function (err)


you can also change the port of your express app by changing 

> app.set('port', (process.env.PORT || your_port));


from the  Shorty Directory run your app by typing

> node app.js

and you can see your app from the URL displayed in the terminal.



	



