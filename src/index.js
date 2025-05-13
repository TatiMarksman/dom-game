import './style.css';
import Game from './game';

const board = document.getElementById('game-board');
const game = new Game(board);
game.start();