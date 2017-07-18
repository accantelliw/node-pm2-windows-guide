var log4js = require('log4js');
log4js.configure('./config/log4js.json');
var logger = log4js.getLogger("web");  

logger.info()
logger.info("***********************************")
logger.info("* Starting with NODE_ENV="+process.env.NODE_ENV)
logger.info("* Starting with args:");
if (process && process.argv) {
	for (var i=0; i<process.argv.length; i++) {
		logger.info("* ["+i+"]:"+process.argv[i]);
	}
}
logger.info("***********************************")

const express = require('express')
const app = express()

app.use(function(req, res, next){
	logger.info("request:"+JSON.stringify(req.url));
	next();
}); 

app.get('*', function (req, res) {
  res.send('Hello from <strong>'+req.url+'</strong>')
})

app.listen(3000, function () {
  logger.info('* web app listening on port 3000!')
  logger.info("*************************")
})