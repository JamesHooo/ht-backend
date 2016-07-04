                                                                                     
var http = require('http'); 
                                                                                                                 
function getIPAdress(){                                                                                          
    var interfaces = require('os').networkInterfaces();                                                          
    for(var devName in interfaces){                                                                              
          var iface = interfaces[devName];                                                                       
          for(var i=0;i<iface.length;i++){                                                                       
               var alias = iface[i];                                                                             
               if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){                  
                     return alias.address;                                                                       
               }                                                                                                 
          }                                                                                                      
    }                                                                                                            
} 


function buy(){
	var mysql = require('mysql');
	var conn = mysql.createConnection({
		host: '10.166.224.197',
		user: 'op',
		password: '123456',
		database:'product',
		port: 3306
		}
	);
	conn.connect();
	
	var insertSQL = 'insert into product(id,pname,pcount) values(0,"milk",1)';
	
	conn.query(insertSQL, function (err, res) {
        if (err) console.log(err);
        
	});
		
	conn.end();
	return "one milk";

}

var handleRequest = function(request, response) {
	var ip = getIPAdress();
	var res=buy();
	response.writeHead(200);                                                                                       
	response.end("<p>buy "+ res + " on <br/>"+ip);  
} 



var www = http.createServer(handleRequest);                                                                
www.listen(8080); 