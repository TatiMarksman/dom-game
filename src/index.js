import './style.css';
import hammerCursor from '../src/img/hammer.png';
import Game from './game';
document.body.style.cursor = `url(${hammerCursor}) 0 0, auto`;

const board = document.getElementById('game-board');
const game = new Game(board);
game.start();