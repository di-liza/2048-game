class Cell {
  constructor(gridElement, x, y) {
    // При создании клетки сразу добавляем ее в дом дерево
    const cell = document.createElement("li");
    //  + класс для стилизации
    cell.classList.add("cell");
    gridElement.append(cell);

    // Записали в клас координаты которые получим
    this.x = x;
    this.y = y;
  }

  // Метод создает ссылку на ячейку
  linkTile(tile) {
    // Установим координаты ячейки
    tile.setXY(this.x, this.y);
    // Запишем в экзепляр нашу ячейку
    this.linkedTile = tile;
    console.log("this.linkedTile:", this.linkedTile);
    /**
     * На выходе имеем 
     * tileElement: 
        div.tile
        value: 2
        x: 2
        y: 1
      */
  }

  // Метод вернет ответ пустая ли ячейка, если значение undefined будет true,
  //  что есть ответом на вопрос isEmpty или если в linkedTile что то записано, верент false
  isEmpty() {
    return !this.linkedTile;
  }
}

export default Cell;
