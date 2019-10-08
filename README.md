# Small-Personal-Projects #
Demonstrations: https://drive.google.com/drive/u/0/folders/1ahm8fjFr0rH-GhiChZtdAL4giMMyV7Pt   
This is a collection of small coding projects I brainstormed and created myself for fun.

## Alphabetizer (Back-End) ##
This C++ program takes in a .txt file of names and returns a new .txt file of sorted names. I made the Node class a template class so that it could be expanded to other applications that require a binary search tree data structure. For example, the same node class could be used to store the names of products in a store.

#### Inconveniences: ####
* All names on the inputted file must each be exactly two words <br />
* The insertNode function requires a node to already be in the tree to insert the next node  <br />

## Westwood Botanical Gardens (Front-End) ##
Westwood Botanical Gardens is a theoretical nature preserve located in Los Angeles. They center their brand around their powerful history and connection to mother nature. I designed the website based on this brand. The user's scroll creates three-dimensional movement on the flat web page because of the parallax effect with the leafy background – similar to moving through a forest. The green logo and green color layer contribute to the feeling of being in nature. I chose to use a white background on the "Our History" section because white represents openness and purity. The people of Westwood Botanical Gardens see the actions of their founders as the purest form of what they do. However, this background is not fully opaque; the leafy background still shows because nature is incorporated into everything they do.  

The picture carousel near the top of the page adds to the three-dimensional effect, as it has three layers. An algorithm automatically moves the carousel at a steady pace to give the user an example of the features that Westwood Botanical Gardens contains. A button bar under this slideshow gives the user control of the picture set. At any time, they can click a button to take them to an image they choose or use the arrows to peruse through at their own pace. These actions stop the auto-move algorithm.  

#### Technologies Used: ####
* jQuery ($window.scroll(), .animate()) <br />
* JavaScript (global variables, .setTimeout(), setInterval(), clearInterval(), switch functions) <br />
* CSS (flexbox, @media, hover, transform) <br />
* HTML5 (form, onclick functions)  

## Bool (Front-End) ##
Bool is a mobile application which helps you plan and organize any sized event with any number of friends. This project demonstrates the front-end for the first few screens for the application. 
