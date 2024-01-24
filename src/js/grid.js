import { Cell } from "./cell";

const GRID_SIZE = 4;
const CELLS_COUNT = GRID_SIZE * GRID_SIZE;

export class Grid {
  constructor(gameElement) {
    this.cells = [];

    for (let i = 0; i < CELLS_COUNT; i++) {
      const x = i % GRID_SIZE;
      const y = Math.floor(i / GRID_SIZE);

      this.cells.push(new Cell(gameElement, x, y));
    }
  }
}
