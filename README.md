# Run Node.js 4.0 on Azure
[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)

Node.js 4.0 is the first "merged" version of Node.js and io.js, combining their powers for the good of humanity and JavaScript developers everywhere - especially those using modern EcmaScript features. A first RC is now available - and can be easily deployed on Azure.

This repository contains the files required to run the latest release candidate of Node.js 4.0 on Azure Web Apps.

## Usage
Simply include .deployment, deploy_node4.sh and iisnode.yml in your project. Done! Or, if you'd like to be even faster - simply click the 'Deploy to Azure' button on this page!

> Monitor this repository for an update as soon as a new RC or the final version of Node.js is available - you will have to update your scripts!

Please note that *native modules are currently not supported*, as all published versions of npm will result in node-gyp not knowing "where to download stuff from".

## Creating a Node 4.0 Website from Scratch
- Sign up for an Azure account. You can run up to 10 websites on Azure for free, so any account will do - for instance the [pay-as-you-go account with free trial credits](http://azure.microsoft.com/en-us/pricing/free-trial/) or the included accounts coming with [BizSpark for startups](http://www.bizspark.com) or the [GitHub Student Developer Pack](https://education.github.com/pack).

#### Option A (for quick testing and small apps)
- Click the 'Deploy to Azure' button in the title of this Readme to deploy this repository with an empty app.js. The 'Deploy to Azure' assistant will automatically create a website for you and guide you through the process. Once created, you can then use Visual Studio Online or FTP to work on your application.

#### Option B (for deployment workflows)
- Fork or download this repository
- Make changes as you see fit - if you just want to see Node 4.0 working, you can use the included `app.js`, which will create a small HTTP server and report back the currently running version.
- Once you made changes, you're ready to deploy - either using the [Azure Git/GitHub/Bitbucket integration or FTP Upload, Dropbox Sync or one of the many command line tools](http://azure.microsoft.com/en-gb/documentation/articles/web-sites-deploy/). If you don't have sensitive code, I recommend [forking this repo and hooking it up to the website](http://azure.microsoft.com/en-gb/documentation/articles/web-sites-publish-source-control/#Step7) - that way, you don't have to worry about deploying yourself. 

## The Deployment Script in Detail
- `.deployment` instructs Azure to run deploy.cmd as the deployment command
- `deploy.cmd` runs the usual Azure Websites deployment for Node Apps, but also downloads the latest version of io.js - saving it to `D:\home\site\bin\node4`. Folders are created if necessary and older versions of io.js overwritten.
- `iisnode.yml` finally tells Azure Websites to use the just downloaded node.exe as Node binary.
- `app.js` is entirely optional and simply spits out the installed version of Node.js. It's only included to "prove" that Node 4.0 is running, but you should most likely replace it with your own app.js/server.js.

## Copyright and License
- Copyright (c) Microsoft Corporation
- Released under the MIT License (MIT)
- Please see LICENSE for more information.