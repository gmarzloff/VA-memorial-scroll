# In Memoriam Veterans Presentation
Dynamically generates a list of names that vertically scroll for use during a semi-annual memorial service. Also supports music playback.

![Screenshot](img/screenshot-memorial.jpg)

## Installation
1. Save the `memorial` folder anywhere on your hard drive. It does not require a web server to run. 
1. Open `memorial.html` in Google Chrome (). 
1. Click "Choose File" button in the bottom left and find the file containing list of names. It should be a text file, with one name per line. A sample file `presidents.csv` is located in the  `names` folder. 

Example: 
```
George Washington
John Adams
Thomas Jefferson
James Madison
James Monroe
John Quincy Adams
```
4. The `.gitignore` file is ignoring anything in a `names/private/` folder, so if you plan on committing revisions to your own repository or contributing to the public one, store the PHI in the `private` folder. 
1. The scrolling will begin automatically. 

## Music
TODO

## Settings
To change the scrolling speed, edit the first line in `style/style.css`. The default is 120 seconds (120s). Just change the number to any duration in seconds, save this file, and refresh the page in Chrome. 

```
/* CHANGE THE ANIMATION DURATION HERE */
:root { --animation-duration: 120s; }
```

### Credits
Developed by George Marzloff, MD. This web app is open source and may be freely used under the [MIT License](https://opensource.org/licenses/MIT). 