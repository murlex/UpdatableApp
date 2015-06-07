This Updatable app pretty much the one more implementation of the Cordova-App-Loader found on github here:
https://github.com/markmarijnissen/cordova-app-loader with improved setup procedure description for dummies like myself,
because I had a hard times falling into every pit possible while learning Cordova technology from zero. So I believe, 
it could be helpful for someone. Though this particular example app using Ionic, this is not the must. 
 
# Settings things up and adding updatability into your project. 

* Setup web server for app updates where contents of www folder should be copied. 
For the test purposes you can install simple node.js web server from here: https://www.npmjs.com/package/http-server
* Ensure the platforms needed has been added into your app (e.g. android)
```
cordova platform add anroid
``` 
* Ensure the following plugins were installed (file, whitelist and file-transfer)
```
cordova plugin add cordova-plugin-file
cordova plugin add cordova-plugin-file-transfer
cordova plugin add cordova-plugin-whitelist
```
* Copy bootstrap.js and cordova-app-loader-complete.js into www folder
* Into index.html add main cordova-app-loader script reference and it's bootstrap script reference just *after* cordova.js. 
````html
<script src="cordova-app-loader-complete.js"></script>
<script src="bootstrap.js" timeout="5100" manifest="manifest.json" server="http://localhost:8080/"></script>
````
* Change *server* attribute to point to the root of your www where is index.html will resides.
* Copy my example of manifest.json into www folder and then update its contents to include all the files of your app.
Fix manifest as follow:
    1. Remove from Index.html references to *all the scripts and styles of your own*. 
    2. Put them into manifest.json both *files* and *load* (see this app manifest.json as example). Please, pay attention, the *load* is actually specifies the JS/CSS loading order!
From now on they be loaded by boostrap.js. You will need it just once and also when some files are added/deleted from your app.
* Write *window.BOOTSTRAP_OK = true* in your code when your app succesfully launches
* In some initialization place (1st controller?) DI 'SelfUpdateService' and call it's 'ensureUpdate()' function. This will update app as needed and also set some event handlers. If you are not using Ionic/angular, just change ensureUpdate() as needed - it's simple.
* Add into Index.html CSP meta tag:
````html
<meta http-equiv="Content-Security-Policy" content="default-src * 'self' cdvfile://*; style-src 'unsafe-inline' 'self' cdvfile://*; script-src 'self' 'unsafe-eval' cdvfile://*">
````
and into Cordova's *config.xml*
````xml
<access origin="*"/>
<allow-navigation href="*://*/*"/>
````    
#Known problems:
* HTML files (templates) don't get updated, though downloaded ok. This is because of relational 'templateUrl' based on installed app root instead of new cached root. 
Will fix it some day... :) Maybe.     
---    
Best regards
Alexander Futoryan.
