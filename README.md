# node-pm2-windows-startup

*Why this project?* I've been struggling for days looking for a *suitable*, *reliable* and *production-ready* solution to handle my NodeJS application deployment on Windows Server. I'm using [PM2](https://github.com/Unitech/pm2) and I just want *my app starts automatically on Windows startup*.

After testing different solutions, I've decided to create this "How To" tutorial listing solutions I've dealt with, considering Pro and Cons for each. 

I Hope you run your app on linux platform; if not, maybe this guide could help you.

***Note***: I will present those solutions using a sample demo app as a reference.

### (1) Introducing Demo App

**Let's introduce Demo app.** It is build by 3 basic components:

1. ***App1***: runs every X msecs logging timestamp in logs\app1.log
2. ***App2***: runs every Y msecs logging timestamp in logs\app2.log
3. ***Web***: a simple express web app, which logs every request in logs\web.log

App management is done using [PM2](https://github.com/Unitech/pm2).   

    Sample App structure:
    apps/ 
    logs/ 
    config/
    ecosystem.config.js
    start*.bat
    stop*.bat
    status*.bat


*Why an app like that?* This is to simulate a basic complexity and avoid the super-simple 'node index.js' use case - that's as easy as useless.

**My App basic requirements:**

- I want my app to be placed on **different drive than C:** - as a best practice, app shouldn't be placed on the same drive of Windows OS. *Let's use D.*
- app must have an **input parameter**, which is "env" in my case. I want, at least, discriminate production against developement, staging, uat, ... 
- (*optional*) I would prefer my app to run with a **Windows Local user**, not *Administrative user*. (*spoiler*: I still didn't find a solution for that)   

####Clone, build & run

    Clone, Build the app
    cd D:\
    git clone https://github.com/accantelliw/node-pm2-windows-guide
    npm install
    npm install -g pm2

    # Start 
    pm2 reload ecosystem.json.js --env=production
    # Status 
    pm2 status
    # Stop 
    pm2 stop all
    # ...or use, scripts (start.bat/status.bat/stop.bat)

### (2) PM2

PM2 allows you to handle you application deployments. 
It provides several benefits, like for example logs management, automatic restart policies, application monitors, plus other things I'm missing. If you're not familiar with it, I suggest to have a look at their page.

The key point for PM2 is to setup Windows PM2_HOME at system level. If you miss that, you'll get troubles.
By default, PM2 installation create a PM2 folder in:

We will move it to a brand new folder: c:\etc\.pm2

How to do that? Follow these steps:
1. Create a new folder c:\etc\.pm2 (mkdir /p c:\etc\.pm2)
2. Create a new PM2_HOME variable (at System level, not User level) and set the value _c:\etc\.pm2_
3. Close all your open terminal windows
4. Ensure that your PM2_HOME has been set, running echo %PM2_HOME%

How PM2 works?
Our new folder will store PM2 relevant files, like PM2 logs (yes, the same you see running _pm2 logs_), PM2 process pid, the dump that is created when you run _pm2 save_. I reccomend to run your PM2 commands and check how files change in that folder.


### (3) Solutions

This guide will go though the following options/solutions:
1. Using NSSM
2. Using pm2-windows-service


