var log4js = require('log4js');
log4js.configure('./config/log4js.json');
var logger = log4js.getLogger("app2"); 

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


var counter = 0;
setInterval(function() {
  logger.info("running " + (counter++))
}, 8 * 100);