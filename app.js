var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var redis = require('redis');

app.set('port', (process.env.PORT || your_port));

app.use(express.static(__dirname + '/public'));

app.set('json spaces', 4);


app.use(bodyParser.json());       

app.use(bodyParser.urlencoded({       
  extended: false
})); 



//definig the host name
var host=request.protocol+'://'+request.hostname+'/';



//connecting to redis server change port and endpoint
var client = redis.createClient(port, 'endpoint');


//change the password to your redis server password
client.auth('password', function (err) {
    
    //if (err) then throw err;
    
    //console.log(err);
});


client.on('ready', function(){console.log('Ready')});

client.on('end', function(){console.log('reconnecting')});

client.on('error',function(err){ console.error(err)});



app.get('/',function (req,res)
        {

res.send('public/index.html');

});



app.get('/:url_id',function (req,res)
        {

var url=req.params.url_id;

client.get(url,function (err,reply){

if(reply!=null)
{

    res.redirect(301,reply);    
    
console.log(reply);    

}
    else
    {
    
    res.send('Dead Link ');
    
    }

});




});


app.post('/create/link/',function (req,res){

url_gen=makeid();

    
    
var url=req.body.url;    
    
    console.log(url);
    
 
client.set(url_gen,url);

data={"url":host+url_gen};    
    
console.log(data);    
res.json(data);

});

function makeid()
{
    

    var text = "";
    var possible = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

    for( var i=0; i < 5; i++ )
                text += possible.charAt(Math.floor(Math.random() * possible.length));

    
    
     
  

return text;


    
               }


app.listen(app.get('port'), function() {

console.log("Node app is running at localhost:" + app.get('port'));

});






