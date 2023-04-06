# TicTacToe Component

This is a React component called `TicTacToe` that represents a Tic-Tac-Toe game board. It has the following features:

## Props
- `props`: The component accepts `props` as its constructor parameter, which is passed from its parent component.

## State
- `board`: An array of length 9 that represents the game board. It is initialized with `null` values and gets updated with 'X' or 'O' depending on the player's moves.
- `currentPlayer`: A string that represents the current player. It can be either 'X' or 'O' and gets updated after each player's move.
- `winner`: A string that represents the winner of the game. It is initially set to `null` and gets updated with the winning player's mark ('X' or 'O') if there is a winner, otherwise remains `null`.

## Methods
- `handleClick(index)`: This method is called when a cell on the game board is clicked. It takes an `index` parameter representing the index of the cell that was clicked. It checks if the cell is already occupied or if the game is over (i.e., there is a winner), and if not, updates the board with the current player's mark ('X' or 'O'), checks for a winner, and updates the state with the new board, current player, and winner.

- `checkWinner(board)`: This method takes the current board as a parameter and checks for a winner based on the winning combinations of Tic-Tac-Toe. It returns the winning player's mark ('X' or 'O') if there is a winner, otherwise returns `null`.

- `handleReset()`: This method is called when the "Reset" button is clicked. It resets the game board, current player, and winner to their initial values.

## Render
- The `render()` method returns the JSX that represents the structure of the Tic-Tac-Toe game. It displays the current player, winner, game board with buttons representing each cell, and a "Reset" button. It also attaches event handlers (`onClick`) to the buttons to call the appropriate methods when clicked.

## Export
- The `TicTacToe` component is exported as the default export, which means it can be imported and used in other parts of the application using `import TicTacToe from './TicTacToe'`.
