# DropDown List
DropDownList is a web application that allows users to select a item from a drop-down list. When a item is selected, the selected course is displayed on the button.

## Installation and Run
Clone the repository: 
```
git clone https://github.com/RenatAllakhyarov/styding-js-dropdown-list.git
```
Go to the project folder:
```
cd styding-js-dropdown-list
```
Open index.html in a web browser: Find the index.html file in the project folder and open it in any modern web browser (Chrome, Firefox, Safari, etc.).

To enter your database for selection, you need to create a JSON file
``` 
data.json
```
and place it along the path
```
resources/data
```
An example of such a file:
```
[
    {"id" : "1", "text" : "First"},
    {"id" : "2", "text" : "Second"},
    {"id" : "3", "text" : "Third"},
    {"id" : "4", "text" : "Fourth"} 
]
  
```
The "id" method is used to assign a specific value for each element, and the "text" method is used to open the text of the corresponding selected element.

## Usage
1. Click on the "What course are you in?" button.
2. Select the desired it from the drop-down list.
3. Clicking on a item will update the button text.

## Features
1. Drop-down list: User can open the list of items by clicking on the "What course are you in?" button.
2. item Selection: When you click on a item name from the list, it is set as the button text is displayed.
3. Interactivity: List items are changed background color to gray on hover, improving user experience.
4. Responsive Design: The app displays correctly on different devices thanks to responsive CSS.

## Technologies
1. HTML: Used for the structure of the web page.
2. CSS: Used to style elements and create visual design.
3. JavaScript: Used to add interactivity, handle events, and dynamically change the page content.

## Main Files
1. index.html: The main HTML page of the app.
2. resources/Styles/style.css: CSS file for styling the app.
3. resources/scripts/main.js: JavaScript file for adding interactivity and app logic.
5. resources/data/data.json: data for filling lists.