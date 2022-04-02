# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Angel Coronel

Time spent: **7** hours spent in total

Link to project: https://glitch.com/edit/#!/zenith-dynamic-insect

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

## Video Walkthrough (GIF)

Multiple GIFs for all the implemented features added here:
![x](http://g.recordit.co/oHhunOCXim.gif)
![x](http://g.recordit.co/abbyuJs6bQ.gif)
![x](http://g.recordit.co/bUftSPLD1l.gif)
![x](http://g.recordit.co/IX2AINwG0b.gif)
![x](http://g.recordit.co/A7BHR1xJHc.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[Math.random() - > https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random]
[.push() - > https://www.freecodecamp.org/news/javascript-append-to-array-a-js-guide-to-the-push-method-2/#:~:text=Sometimes%20you%20need%20to%20append,method%20is%20what%20you%20need.&text=This%20method%20accepts%20an%20unlimited,the%20end%20of%20the%20array.]


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it?
[I had no previous experience using CSS, HTML or JavaScript before. This is my first project I work on where I had to essentially create a website. The explanations and tutorials were easy to follow but hard to implement when it came to writing down my own touch to the project. It was especially difficult to figure out how to add additional features onto the project. Creating a random pattern took me an extra search and I had to think about how to implement it in order to create a random pattern every time the game would be replayed. The pattern seemed to repeat often regardless of attempts so once I understood the function better, I decided to add an 
extra component of randomness in order to create a better random clue experience. Another feature that took me the longest time was simply making it be faster after every play. I effectively created the function but after I had moved on I played the game and eventually it got to a point where the pattern would go to fast the computer would simply glitch out the pattern and didn't have enough time in between clue to even play the sound for every clue. I had to test the limits of what a good pace to speed things up would be and the limit as to how many clues I could create before the game would be too fast for the computer to compete. I essentially made a lot of testing to measure a good space and clue amount limit although most of my test were very simply (they followed a pattern of [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] or [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]). For the most part, it was very helpful to have the IDE show the changes made one the code live to see them and test them. It lead to a lot of trial and error but made it easier for me to understand what was happening in the background and what my code was doing.]

3. What questions about web development do you have after completing your submission?
[I wonder how testing is done for regular websites since this project made me make particular tests I hadn't implemented in any of my courses before. Since I noticed that some of the features weren't obvious unless shown (three mistakes until game over feature), do some tools need an explanation for the user interface or for the user themselves to understand what to do when you click something intentionally or unintentionally? I noticed we had to create the page layout and interface almost from scratch in the project, are there any tools or maybe libraries that are available that create a page layout for you (like a backbone code to a website) where you could simply edit or add components?]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific.
[If I had more time to work on this project, I would add a feature where the game would keep giving you clues indefinitely and the sequence would technically keep going on for forever. There would be a an actual end to the sequence or a limit but the game would keep going until the user "looses". Instead of loosing the game as we have it set here which means guessing incorrectly until you finish the sequence, you would get an amount of how far you got in the game (how many clues you got right). It would follow a game more closely related to getting a high score and then how much further you can keep pushing your memory limits. Aside from that, I would add an additional feature that kept track of the previous attempts and keep the highest score. With that feature, I could implement a comparison to your current score to the highest score played so far and even a "new record" message if your current score so far has become greater than the highest score.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/427175b4214b46d09b7807a53ca51bb5)


## License

    Copyright [Angel Coronel]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
