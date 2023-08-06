# Battleship Game

This project was developed as part of a learning experience to improve skills as a software developer, focusing on Test-Driven Development (TDD) principles, Sass implementation, and overall proficiency in vanilla JavaScript. The game is a digital adaptation of the classic Battleship board game, where the player competes against a computer opponent.

## Features

- Play against a computer opponent
- Place your ships on the grid using X and Y coordinates
- Three main screens: Main Page, Setup Page, and Game Page
- Info feature to inform players about hits and misses, and if their ships are hit

## Technologies

The following technologies were used in the development of this project:

- JavaScript
- Jest
- Sass
- Webpack
- ESLint
- Babel

## Screens

### Main Page

The main page is the entry point to the game. It provides options to start the game or get more information about the game.

### Setup Page

On the setup page, players can place their ships on the game board using X and Y coordinates. Players can set up the positions of their ships strategically to gain an advantage during the game.

### Game Page

The game page displays the game board, where players can take turns firing shots at their opponent's ships. The info feature provides real-time feedback on whether a shot hit an enemy ship, missed, or hit one of the player's own ships.

## How to Play

1. Start the game from the Main Page.
2. On the Setup Page, place your ships on the grid using the provided X and Y coordinates.
3. Once the setup is complete, the game will transition to the Game Page.
4. Take turns firing shots at your opponent's ships by selecting target coordinates on the game board.
5. The info feature will inform you whether your shot hit an enemy ship, missed, or hit one of your ships.
6. Keep playing until one of the players sinks all of the opponent's ships.
7. You can restart the game from the end screen, which will take you back to the Setup Page to play again.

## Installation

To install and run the Battleship Game on your local machine, follow these steps:

1. Clone this repository to your local machine using `git clone`.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.

## Usage

To run the Battleship Game, execute the following command:

```bash
npm run build
```

This will start the development server, and you can access the game in your web browser at http://localhost:3000.

## Testing

The project was developed using Test-Driven Development (TDD) principles, and automated tests have been written using Jest. To run the tests, use the following command:

```bash
npm test
```

## Linting

ESLint is used to maintain code quality and ensure consistency in the codebase
