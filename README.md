# Project-1-GAME-

# PAC-INVADERS
Pac-Invaders is based on good old 1978 space invader game where a shooter(Pac-man) moves horizontally across the bottom of the screen and fires at aliens overhead.
The aliens begin a two rows of eight that move left and right as a group, shifting downwards each time they reach the edge of the screen. The goal is to eliminate all the aliens by shooting apples at them. Though a player has three lives, the game ends when alien invaders reach the bottom of the screen. The aliens will attempt to destroy the player by firing pink lasers, when hit a player loses a live.

## CREATING OF PAC-INVADERS
Pac-Invader was created using HTML, CSS and Javascript. HTML was used to create a blueprint of what i want in place of the game.  HTML tags was used to create buttons like that PLAY and START GAME buttons in the game. HTML is vital in the project as it denotes how each page should look. 
[html-screenshot](http://prnt.sc/1r2ehaz)

CSS was used to style the pages of the game. With css I am able to bring the blueprint (HTML) into life. From the screenshot below, you can tell i used css flex box properties to style the grid and other elements of the game. Using flex, the positioning of elements is precise. An example of this will be the grid. To use flex i had to flex its container which is the grid wrapper class before assigning the grip the properties and values I preferred. Flex wrap was used to wrap the grid boxed so it doesn't display in block or inline. Both rgba and hexcode where used when choosing colour for specific element on the page. Styling the background of certain element, consistent properties were used across to achieve what was needed. E.g consistent use of background-repeat, background size and background position to position the background images properly.
[part-css-screenshot](http://prnt.sc/1r2j0fk)![part-css-screenshot2](http://prnt.sc/1r2j4d8)

Players are able to move, shoot aliens and acquire scores at the end of the game due to javascript and DOM manipulation. As seen below i used Dom to select all the element in the html that i was to target and write function for such as the grid, play button, start button and other elements. 
[DOM-manipulation-screenshot ](http://prnt.sc/1r2kpj3)
Javascript functions are blocks of code designed to perform a particular task as said by w3school. This is exactly how functions were used in building this project. When you load to the game screen you can tell when the start game button is pressed it hides and this was implemented using javascript. Another function of the game that was created using javascript was the grid to be created. This basically created a new function and add it to the html of the page. More key movement of the player(pac-man) was created using javascript function. Passing event as the parameter of the function, we created a function that if right arrow key or left arrow key is pressed the player should perform specific action which is move right or more left and this can be test in the game. Other functions included in the game are addPacman, removePacman, addAlien, removeAliens, moveAliens and more. 
moreAliens function as shown below
[moreAlien-function](http://prnt.sc/1r2mnmq)

## TIMEFRAME OF DEVELOPING PROJECT

 #### DAY ONE (PLANNING)
 First day of project i decided to make a plan of how the game was going to look like and what feature to implement. I went ahead and made a sketch of how it would look. This gave me an understand of what elements will be need in the html. After html, I had a rough idea of which of the html element will be flexed and it was added to the plan. With features and html elements listed, i started making a plan for the javascript function that where going to be create and all the targeted element that was going to be needed.

#### DAY TWO (WRITING OF CODE)
On day two I decided to type the code in visual studio code. Started with the html, css and part of javascript where a grid is created using javascript, addPacman and removePacman function were created on  Day two.

#### DAY THREE (MORE JAVASCRIPT)
On day three I decided to add more javascript functions such as addAliens, removeAliens and moreAliens. moreAliens was challenging to do because i had the logic in place but implementing it was somewhat confusing for me so it took me the longer time to complete.

#### DAY FOUR (CSS) 
On this day, it was all about css as I thought it was time to add styles to my page and make is presentable which i gave myself the entire day styling and making the game look as it is.

 #### DAY FIVE (MORE JAVASCRIPT)
 Day five was one of my most challenging day as i had to implement two functions that I understood the logic but my code was working properly and these were alienBullet function where aliens shoot from random index of their current position. I also had to implement a function called bullet and this function makes the player(pac-man) shoot apples to try destroy the alien.

#### DAY SIX (CSS & JAVASCRIPT)
This day i had to add more css such as images for the alien laser as a background and also make the result screen using both javascript and css. Fixing all the errors that had to be solved. Added sound effect to the game after achieving my mvp.

#### DAY SEVEN (READ ME & COMMENTING)
Final day of project which i used to refactor my code and comment my code. Also used the day to complete my readme for my project and push my project to my github repository

## ROADMAP
A list of possible future updates

 - Adding multiple level to the game
 - The ability to choose between multiple characters(skins)
 - Login and save your score for score leaderboard 
  
