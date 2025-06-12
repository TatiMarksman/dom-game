import goblinImg from './img/goblin.png';
export default class Game {
  constructor(container) {
    this.container = container;
    this.cells = [];
    this.activeIndex = -1;
    this.score = 0;
    this.missed = 0;
    this.wasClicked = false;
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

    this.goblin.addEventListener('click', () => {
      this.wasClicked = true;
      this.score++;
      this.goblin.remove();
    });

    const index = this.getRandomIndex();
    this.cells[index].appendChild(this.goblin);
    this.activeIndex = index;
  }

  moveGoblin() {
    if (!this.wasClicked && this.activeIndex !== -1) {
      this.missed++;
      console.log('Missed:', this.missed);
      if (this.missed >= 5) {
        clearInterval(this.interval);
        alert('Game Over! Your Score: ' + this.score);
        return;
      }
    }

    let newIndex;
    do {
      newIndex = this.getRandomIndex();
    } while (newIndex === this.activeIndex);

    this.cells[newIndex].appendChild(this.goblin);
    this.activeIndex = newIndex;
    this.wasClicked = false;
  }

  getRandomIndex() {
    return Math.floor(Math.random() * this.cells.length);
  }
}
