import goblinImg from './img/goblin.png';

export default class Game {
  constructor(container) {
    this.container = container;
    this.cells = [];
    this.activeIndex = -1;
  }

  start() {
    this.createBoard();
    this.createGoblin();
    this.interval = setInterval(() => this.moveGoblin(), 1000);
  }

  createBoard() {
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.cells.push(cell);
      this.container.appendChild(cell);
    }
  }

  createGoblin() {
    this.goblin = document.createElement('img');
    this.goblin.classList.add('goblin');
    this.goblin.src = goblinImg;
    const index = this.getRandomIndex();
    this.cells[index].appendChild(this.goblin);
    this.activeIndex = index;
  }

  moveGoblin() {
    let newIndex;
    do {
      newIndex = this.getRandomIndex();
    } while (newIndex === this.activeIndex);

    this.cells[newIndex].appendChild(this.goblin);
    this.activeIndex = newIndex;
  }

  getRandomIndex() {
    return Math.floor(Math.random() * this.cells.length);
  }
}
