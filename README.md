# Browser Game
 Milestone Project
 
# NYU-SD-04 Milestone Project: Planning

_Before you start programming your project_... plan it!

Complete the planning sections below and include them in the README.md of your project repository. Once you're done, reach out to your instructional staff -- they'll examine your plan, help you scope it appropriately for the tools available to you and think ahead toward technical solutions, and point out any areas that could use any more thought. _Use the template below!_

--------

## Project Description

Trivia Trials is inspired by the family game made famous by Ellen DeGeneres "Heads Up"

This single player game includes 50 questions based on movie quotes or music lyrics.  
The player "selects a card" with a statement and has the option to choose whether the statment is a quote from a movie or a lyric from a song and has 30 seconds to get as many statements correct as possible with each correct answer tallying points as the game progresses.

## Game Logic

```
Upon opening the game there will be an introduction screen for the game with the name and description of the game, player instructions, and how to gain/accrue points.

I will create a play button shown underneath the instructions to start the game.

Once this play button has been selected the 30 second timer will begin.
Simultaneously a timer will be displayed to countdown the time remaining.
Tally scoreboard will also be displayed, at the ready to begin tallying correct answers over the number of cards attempted.
This screen will also begin with the first question and option buttons to choose "Movie Quote" or "Song Lyric".
When the player hovers over a button prior to the player selecting their answer the hoovered over button will change color and be highlighted once selected.

Once an answer is selected three things should happen:
The correct answer column will increase, if the player's answer is correct, if not the correct answer column will not increase.
The attempted card count will increase for each card attempted.
A new question card will populate and answer buttons renewed

All three steps will occur until the timer has reached 30 seconds, at which time the game is over and the player will recieve a "YOU WIN!" (if 70% of questions were answered correctly) and "YOU LOSE" (if less than 70% of answers were correct).

```

## Deliverables

### MVP Criteria

- Question cards should be legible
- Answer buttons should have color transition upon player hovering
- Timer should begin countdown immediately and be clearly shown
- Scoreboard should tally proper and be placed in a strategic area easily legible

### Post-MVP Plans

- Timer should begin countdown immediately and be clearly shown
- Create rotating cards during transitions
- Add a sound bite during each transition to audibly indicate game progression
- Add in a countdown alarm sound and color change alert on timer at the 5 second remaining mark
- Answer buttons highlighted upon selection
- while with a fun and inviting design
- transition between question cards should be quick and seamless

## Project Planning

| Date | Goals |
| ---- | ----- |
| Tue 11/22 | Create GitHub repository. Complete README.md. |
| Wed 11/23 | Begin building environment: HTML, JS, & CSS files separately     |
| Sun 11/27 | Debug and test game in browser     |
| Tue 11/29 | Debug and test game in browser     |
| Wed 11/30 | Attend office hours with any questions or issues, Debug and test game in browser, and Deploy to GitHub Pages. |
| Thu 12/01 | Submit completed project. Project presentations. |
