class Tile {
  constructor(gridElement) {
    // Создаем ячейку и добавляем в дом дерево
    this.tileElement = document.createElement("li");
    // + класс
    this.tileElement.classList.add("tile");

    // Записываем в ячейку рандомное число как в игре, котрое может быть или 2 или 4, в метод передаем value
    this.setValue(Math.random() < 0.5 ? 2 : 4);

    // Добавляем текстовый контент ячейке
    this.tileElement.textContent = this.value;
    gridElement.append(this.tileElement);
  }

  // Метод которы установит координаты ячейки (tile)
  setXY(x, y) {
    this.x = x;
    this.y = y;

    // для li.tile будут установлены значения css переменных
    this.tileElement.style.setProperty("--x", x);
    this.tileElement.style.setProperty("--y", y);
  }

  // Устновить цвета ячейки по системе hsl
  setValue(value) {
    this.value = value;
    this.tileElement.textContent = value;
    // ? тут вопрос
    const bgLightness = 100 * Math.log2(value) * 9;

    this.tileElement.style.setProperty("--bg-ligthness", `${bgLightness}%`);
    this.tileElement.style.setProperty(
      "--text-ligthness",
      `${bgLightness < 50 ? 90 : 10}%`
    );
  }
}

export default Tile;
