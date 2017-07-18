SET CURRENT_PATH=%~dp0
cd /d %CURRENT_PATH%
start pm2 reload ecosystem.config.js --env=production