Deploying a Node.js App on Windows EC2 (AWS)
Prerequisites

A Windows EC2 instance running on AWS
Your project files ready (server.js, calculator.html, etc.)


Step 1 — Install IIS

Click the Windows Start button → open Server Manager
Click Add roles and features
Select Web Server (IIS) → follow the wizard → click Install


Step 2 — Install Node.js

Go to nodejs.org on the EC2 browser
Download the LTS version (Windows installer .msi)
Run the installer → keep all defaults → click Finish
Verify installation — open PowerShell and run:

powershellnode -v
npm -v

Step 3 — Place your project files
Copy all your project files (server.js, calculator.html, etc.) into:
C:\inetpub\wwwroot\

Step 4 — Start the application
Open PowerShell, navigate to the folder and start the server:
powershellcd C:\inetpub\wwwroot
node server.js
You should see:
Server running on http://localhost:3000
Test it locally inside the EC2 by opening a browser and visiting http://localhost:3000.

Step 5 — App works locally but not from outside?
If the app runs fine inside the EC2 but is unreachable from your mobile or other devices, the Windows Firewall is blocking outside traffic. Run this in PowerShell to open the port:
netsh.exe advfirewall firewall add rule name="Nodejs Port 80" dir=in action=allow protocol=TCP localport=80
Then verify the AWS Security Group also has an inbound rule allowing the same port (80 or 3000).

Step 6 — Keep Node.js running permanently
By default, Node.js stops when you close PowerShell. Install PM2 to keep it running in the background even after reboots:
powershellnpm install -g pm2
pm2 start server.js --name myapp
pm2 save


Troubleshoot the windows firewall:
1. netsh.exe advfirewall set allprofiles state off
2. Test-NetConnection -ComputerName 10.0.1.104 -Port 3000
3. netsh.exe advfirewall set allprofiles state on
4. netsh.exe advfirewall firewall add rule name="Nodejs Port 3000" dir=in action=allow protocol=TCP localport=3000
