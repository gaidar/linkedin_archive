# Script to archive LinkedIn messages

If you are tired of clicking on messages in your LinkedIn inbox, use this script in Google Chrome to get rid of all of them.

LinkedIn inbox does not provide a way to select all messages and archive them. So, if you want to archive multiple messages - you have to select them one by one and then click on an archive button. Takes too many clicks, right?

Thanks to the ability to manipulate the browser with simple JavaScript, we can automate the process. Below is a simple script that works as of **Nov 9, 2023** (until LinkedIn changes the HTML code of their pages). You can open Chrome, navigate to LinkedIn messages, and then click on three dots in the top right corner of your browser; in the menu, select More Tools -> Developer Tools, and then select Console. Copy & paste the script below to the Console Window and watch your browser do the clicking for you.

The script simply finds all the messages in the left panel, clicks on each of them, and then hits the Archive button. Then it waits for 5 seconds for more messages to load and repeats the operation.
