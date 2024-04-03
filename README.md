# React Tic Tac Toe

This is a simple, interactive Tic Tac Toe game built with React.

## Components

The application consists of two main components:

### `Square`

This component represents a single square on the Tic Tac Toe board. It takes a `value` prop to display ('X', 'O', or null) and a `onSquareClick` prop as a callback function for when the square is clicked.

### `Board`

This component represents the entire Tic Tac Toe board. It maintains the state of the game, including which squares have been filled and whether 'X' or 'O' is the next player. It also calculates the winner of the game.

## Game Play

To play the game, players take turns clicking on the squares on the board. The first player is 'X'. The game continues until all squares are filled or a player has won. If a square is already filled or a player has already won, clicking on the squares will have no effect.

## Running the Application

To run the application, use the following commands:

### `npm start`

This command starts the application in development mode.\
Visit [http://localhost:3000](http://localhost:3000) to see the application in your browser.

The application will automatically refresh when you save changes.\
Lint errors, if any, will be displayed in the console.

### `npm test`

This command starts the test runner in an interactive watch mode.\
Refer to the [running tests](https://facebook.github.io/create-react-app/docs/running-tests) section for more details.

### `npm run build`

This command builds the application for production and outputs to the `build` directory.\
It bundles React in production mode and optimizes the build for optimal performance.

The build output is minified and the filenames are hashed.\
Your application is now ready for deployment!

Refer to the [deployment](https://facebook.github.io/create-react-app/docs/deployment) section for more details.

### `npm run eject`

**Caution: Ejecting is irreversible. Once you `eject`, there's no turning back!**
