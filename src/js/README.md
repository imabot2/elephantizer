# JavaScript Sources 

## Architecture

Below is the architecture overview:


```
js
├── index.js
├── module
│   ├── index.js
│   ├── view.js
│   ├── model.js
│   ├── translate.js
│   ├── elements.html
│   ├── elements.css
```

Each module contains a file `index.js` that is the entry point to use the module. Folder can also contain 
* `view.js` manages the DOM elements and events
* `model.js` is dedicated to data managements or module behavior
* `translate.js` file containing the translations for the module
* `.html` files that are HTML templates loaded dynamicaly
* `.css` files loaded in the view


# /account

The [account module](/src/js/account/) manages the user account (username, email, password...)



# /answerbar

The answer bar manage the answer bar in typing mode.



# /bootloader

![Bootloader view](/src/js/bootloader/bootloader.png)

The [bootloader module](/src/js/bootloader/) manages the loading layer and the console. 

 
 
 # /generator

 Generate the next question in Series or Relevant mode


 # /series


The series module store the series loaded from JS module imported from the server. The series are loaded and keeped in memory. You may have 5 series in memory, and only one in the [current selection](/src/js/selection/).