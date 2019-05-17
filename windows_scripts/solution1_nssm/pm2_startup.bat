@echo off
set HOMEDRIVE=C:
set PM2_HOME=c:\etc\.pm2

@REM Ensure that pm2 command is part of your PATH variable
@REM  if you're not sure, add  it here, as follow:
set path=C:\Users\walter\AppData\Roaming\npm;%path%

@REM Optionally, you can add 'pm2 kill' just before 
@REM  	pm2 kill & pm2 resurrect
@REM otherwise, you can simple call resurrect as follow:
pm2 resurrect

echo "Done"
