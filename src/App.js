import React from 'react';
import { Client } from 'boardgame.io/react';
//import { Local } from 'boardgame.io/multiplayer';
import { SocketIO } from 'boardgame.io/multiplayer'
import TicTacToe from './Game';
import TicTacToeBoard from './Board';

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  //multiplayer: Local(),
  debug: false,
  multiplayer: SocketIO({ server: 'localhost:8000' }),
});

// const App = () => (
//   <div>
//     <TicTacToeClient playerID="0" />
//     <TicTacToeClient playerID="1" />
//   </div>
// );



class App extends React.Component {
  state = { playerID: null };

  render() {
    if (this.state.playerID === null) {
      return (
        <div>
          <p>Play as</p>
          <button onClick={() => this.setState({ playerID: "0" })}>
            Player 0
          </button>
          <button onClick={() => this.setState({ playerID: "1" })}>
            Player 1
          </button>
        </div>
      );
    }
    return (
      <div>
        <TicTacToeClient playerID={this.state.playerID} />
      </div>
    );
  }
}

export default App;