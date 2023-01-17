# Rock, Paper, Scissors

### Abstract:

The main goal of this project was to create a functional rock, paper, scissors game. When the page loads, the user sees player information populated from instantiated `Player` objects and options to play an easy or hard version of the game. For the purposes of this project, only two instances of `Player` were used, a `human` and a `computer`. After choosing a difficulty, the user should see the game board, with the DOM being consistent with the data model and instantiated `Game` class. The user should see a button to return to the mode selection and clickable fighter icons. Upon clicking an icon, the user should see the results of the game. This includes a header stating who won or if the round was a draw, as well as the `human` and `computer` fighter images. Scores should be updated accordingly and the DOM should update to reflect that score.

### Installation Instructions:

To clone a copy of the project to a remote repository, follow these steps:

1. Go to the project [page on GitHub]().
1. Fork the repository.
1. Click the "<> Code" button and copy your preferred clone link.
1. Open your Terminal.
1. Navigate to the directory you would like to clone the repository to.
1. Enter the command `git clone cloneLink` replacing `cloneLink` with the link you copied in Step 3
1. Use command `code .` to open the project in your preferred text editor.

### Preview of App:

![App Preview](https://media.giphy.com/media/48JsoYVgbj2p2W0JDH/giphy.gif)

### Context:

Completed as part of the Turing School of Software Development 2211 FE Mod 1 curriculum
Approximate hours to completion: 25

For this project, we were expected to create all necessary directories, files, and repositories. We were provided with the required features of the project and were expected to create the app with data model. The DOM was expected to reflect the data model. Any function adjusting the data model was expected to be in its respective class.

### Contributors:

[Kirk Hauck](https://github.com/kirkhauck)

### Learning Goals:

- Solidify and demonstrate understanding of:
  - DRY JavaScript
  - Event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Use problem solving process to break down large problems, solve things step by step, and try not rely on an outside “answer” to a logical challenge

### Wins + Challenges:

**Challenge:**
Creating game logic not using a long string of conditionals.

**Win**
After creating a functional game, the logic for evaluating a winner was revisited. Instead of using conditionals to evaluate every possible scenario, a new property was added to the `Game` class. This property, `rules`, contained an object with the fighter names as `keys` and each value containing a name or an array of names that the `key` could defeat (e.g., the key, `scissors`, would have `paper` as its value, and `cat` would have `['mouse', 'monkey']` as its value). The method determined the winner by using the `Object.includes()` method and dot/bracket notation to determine if the computer fighter was included in the human fighter's corresponding property. If there was a match, the human won. If there was no match and there was no draw, the computer won.

**Challenge:**
Avoiding multiple instances of two functions to handle easy and hard games.

**Win:**
Initially, there were to game board sections in the HTML, one for an easy game, and one for a hard game. This was done because the fighter icons had been hard-coded into the HTML, rather than relying on the data model. This failed to meet the project requirements and also relied on multiple instances where two functions were identical but could only work for either an easy game or hard game. For example, originally two functions were used to check a winner, `Game.checkWinnerEasy()` and `Game.checkWinnerHard()`. These types of duplicate functions occurred throughout the code, from setting up the game board, to selecting the player fighters. After `Game.checkWinner()` was made to replace the other two functions, all instances of duplicate functions were evaluated and new functions that could handle both easy and hard scenarios were developed, relying on the new `Game.rules` property.