# node-pm2-windows-startup

Before start...
If you missed Demo App description, you can read it here.
If you missed PM2 intro&considerations, you can read it here.

## Option1: Add script in Windows Startup Folder

I read online a lot of guys that suggest this "option".
The idea is to call PM2 startup command (pm2 resurrect) when Windows startup, and therefore someone suggest to add it into User startup folder, which is: 
C:\Users\<username>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup 

So, let's do that:
0) Set PM2_HOME + double-check PM2_HOME + run pm2 save  
1) Create your PM2 startup script.
   See sample: pm2_startup_option1.bat (configure the absolute path)
2) On Windows, type shell:startup
3) Create a link to the script
4) That's it.

Check out the video:
[video] TBD

Pro:
+ :confused: ehm... it's easy... :persevere:

Cons:
- Script will run only when User login. Yes: If you dont't log on Windows with that User, script will NOT be executed, this means that this "solution" requires a manual task (User login) to be performed.

Overall Consideration
That's a poor option, and definetely not a solution. DO NOT USE on Production.
