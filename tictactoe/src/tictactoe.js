import React, { Component } from 'react';
import './tictactoe.css'

class TicTacToe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: Array(9).fill(null), // Represents the game board
      currentPlayer: 'X', // Represents the current player (either 'X' or 'O')
      winner: null, // Represents the winner of the game
    };
  }

  handleClick(index) {
    const { board, currentPlayer, winner } = this.state;

    // Return early if the cell is already occupied or the game is over
    if (board[index] || winner) {
      return;
    }

    // Update the board with the current player's mark ('X' or 'O')
    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    // Check for a winner
    const newWinner = this.checkWinner(newBoard);

    // Update the state with the new board, current player, and winner
    this.setState({
      board: newBoard,
      currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
      winner: newWinner,
    });
  }

  checkWinner(board) {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }

  handleReset() {
    this.setState({
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
    });
  }

  render() {
    const { board, currentPlayer, winner } = this.state;

    return (
      <div>
        <div>Current Player: {currentPlayer}</div>
        <div>Winner: {winner}</div>
        <div className="board">
          {board.map((cell, index) => (
            <button key={index} onClick={() => this.handleClick(index)}>
              {cell}
            </button>
          ))}
        </div>
        <button onClick={() => this.handleReset()}>Reset</button>
      </div>
    );
  }
}

export default TicTacToe;
