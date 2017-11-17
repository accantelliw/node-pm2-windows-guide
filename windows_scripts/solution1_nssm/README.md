## Solution1: Using NSSM

Before start...

+ If you missed Demo App description, you can read it [here](https://github.com/accantelliw/node-pm2-windows-guide/ "here").
+ If you missed PM2 intro&considerations, you can read it [here](https://github.com/accantelliw/node-pm2-windows-guide/ "here").

## Option2: Using NSSM

The idea is to create a Windows Service that we can use to handle our application. That service will be set as "Automatic", in order that our application will be started after Windows startup. In order to create a Windows Service, I will use [NSSM](http://nssm.cc/ "NSSM") which is a great tool to create/edit/remove Windows Services. It's much more well done than Windows default one, so go with it. 

So, let's do that:

0. Did you already setup `PM2_HOME`? If not, it's time to do that.  
1. Create your PM2 startup script. Check out sample: `pm2_startup.bat`
2. (**As administrator**) Open command line, and run:

	    nssm.exe install MyPM2Service

	    Set the following settings:
	    Path: D:\node-pm2-windows-guide\windows_scripts\solution1_nssm\pm2_startup.bat
	    Folder: D:\node-pm2-windows-guide\
	    Startup Type: Automatic delayed
	    Restart: None
   This will create a Windows Service called `MyPM2Service`
3. That's it.

(If you want to remove installed service, run: `nssm.exe remove MyPM2Service`)


### Pro:
+ it works on restart (even if user is not logged in)
+ you can check Service startup on Windows Event Viewer

### Cons:
- Now PM2 commands require Admin privileges
As an example, run-start/run-stop/run-status.bat won't work anymore, you have to use run-as-admin-start/run-as-admin-stop/run-as-admin-status.bat instead.
- Not a big deal, but there are no logs for Windows Service itself, that sometimes could be useful to debug something went wrong (that's basically the main difference I found with solution 4 `"Using pm2-windows-service"`)
