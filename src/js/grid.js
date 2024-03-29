import Cell from "./cell";

//В стандартной игре 4 колонки по горизонатли и 4 по вертикали
const GRID_SIZE = 4;

//Для того что бы узнать количество клеточек нужно перемножить количество клеточек по горизонтали и по вертикали
const CELLS_COUNT = GRID_SIZE * GRID_SIZE;

class Grid {
  constructor(gameElement) {
    //Создаем пустой масив клеточек
    this.cells = [];

    //С помощью цыкла создаем необходимое кол-во клеток и каждую пушим в масив
    for (let i = 0; i < CELLS_COUNT; i++) {
      /** прописываем координат x, берем остаток от деления i на CELLS_COUNT, например 1 % 4 = 1,
       *  потому что 1 / 4 будет 0,25, тогда 0 * 4 = 0 и 1 - 0 = 1
       *  доп. пример: 15 / 4 = 3.75, 3 * 4 = 12, 15 - 12 = 3, поэтому 15 % 4 это 3.
       * */
      const x = i % GRID_SIZE;
      // прописываем координат y
      const y = Math.floor(i / GRID_SIZE);

      // При добавлении клеточки в масив сразу же создаем экземпляр класса клеточки, со своими методами для обработки объекта
      // Туда передаем наше поле и координаты x, y
      this.cells.push(new Cell(gameElement, x, y));
    }

    this.cellGropuByColumn = this.groupCellsByColumn();
  }

  // Метод дающий рандомную клеточку
  getRandomEmptyCell() {
    // Фильтруем масив клеток и получаем только все пустые клеточки, позже с помощью метода isEmpty()
    // (см.описание в файле cell.js) добавится к не пустой клеточке свойство linkedTile: Tile(сдесь будет прописано значение ячейки)
    // но по факту это сейчас масив всеъ пустых клеток
    const emptyCells = this.cells.filter((cell) => cell.isEmpty());

    // Теперь получаем индекс рандомной клетки, для этого Math.random() от 0 до 1 умножаем на длину массива пустых клеточек
    const randomIndex = Math.floor(Math.random() * emptyCells.length);

    // Теперь может получить наш рандомный елемент в масиве пока еще пустых клеток
    return emptyCells[randomIndex];
  }

  groupCellsByColumn() {
    return this.cells.reduce((groupedCells, cell) => {
      groupedCells[cell.x] = groupedCells[cell.x] || [];
      groupedCells[cell.x][cell.y] = cell;
      return groupedCells;
    });
  }
}

export default Grid;
