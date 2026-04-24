# aws-app

deploying in windows server:
1. click on windows, install IIS server
2. download and install node.js
3. file manager C:\inetpub\wwwroot --> place the project file inside the folder
4. start the application: node server.js
5. if the application is working fine inside the windows server and its not reacheable outside run the below.
6. netsh.exe advfirewall firewall add rule name="Nodejs Port 80" dir=in action=allow protocol=TCP localport=80
