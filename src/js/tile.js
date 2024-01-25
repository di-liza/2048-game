class Tile {
  constructor(gridElement) {
    // Создаем ячейку и добавляем в дом дерево
    this.tileElement = document.createElement("div");
    // + класс
    this.tileElement.classList.add("tile");

    // Записываем в ячейку рандомное число как в игре, котрое может быть или 2 или 4
    this.value = Math.random() < 0.5 ? 2 : 4;

    // Добавляем текстовый контент ячейке
    this.tileElement.textContent = this.value;
    gridElement.append(this.tileElement);
  }

  // Метод которы установит координаты ячейки (tile)
  setXY(x, y) {
    this.x = x;
    this.y = y;

    // для div.tile будут установлены значения css переменных
    this.tileElement.style.setProperty("--x", x);
    this.tileElement.style.setProperty("--y", y);
  }
}

export default Tile;
