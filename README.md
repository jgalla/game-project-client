# Tic-Tac-Toe

## Technologies Used
* HTML
* CSS
* JavaScript
* jQuery
* Ajax
* Bootstrap
* Sass

## Development Process
The project began with a simple wireframe. After reviewing, it was determined that there were too many additional features outside the scope of MVP. The focus shifted to meeting all aspects of MVP instead of adding styling or advanced features.

From here a board game was layed out using HTML and CSS, followed by game logic. After the base level logic was completed, code was refactored and seperated into various files according to their function.

Game logic was tested and the focus moved to API calls - starting with the user (or authorization) API. When this was completed, a temporary login and password was hard coded to allow the game API to be built without having to enter credentials after every change or browser refresh.

The game logic was completed and tested again to ensure no issues were generated from the API calls before deploying.

After completing API calls, minimal styling was introduced and user messages were seperated from authorization messages. Minor tweaks were made to ensure messages were cleared appropriatly and components were visible at the correct times.

Requirements were verified line-by-line and changes made as necessary.

At this point, updated code was deployed and full site testing completed.

Throughout coding, effort was placed on completing one task at a time in an appropriate branch with commits after each minor success. Upon completion, the branch was merged into the master branch. Code was periodically pushed to GitHub to protect against computer malfunction.

The initial branches were seperated by section of the project, but that changed after finding it difficult to keep track of merging changes from master to each branch. The process changed to have a branch for each task (such as feature, bug fix, refactor, etc.) and retire that branch after merging.

## Wireframe
[Click Here For Wireframe](https://drive.google.com/file/d/1AnqnqV2sA_YZTnVL6sFkVboWDwg4fIUJ/view "just look at this sweet wireframe")

## User Stories
* As a user, I want to read about the game and rules before creating an account.
* As a user, I want to create an account to play and save games.
* As a user, I want to see the total wins for each player.
* As a user, I want to be able to change my password.
* As a user, I want to see a confirmation that my actions have been registered.

## Unsolved Problems / Futire Work
* Must style with CSS and graphics.
* Move `Total Games Played` result to its own location to account for the delay in API get request.
* Refactor user and authorization messages to a single, organized location.
