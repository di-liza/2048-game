import Grid from "./js/grid";
import Tile from "./js/tile";

const gameBoard = document.getElementById("game-board");

// Создаем экзепляр класса Grid (создает массив клеток, имеет метод для получения рандомной активной клетки)
const grid = new Grid(gameBoard);

// Вызываем этот экземпляр, сразу получая радномную активную клточку,
//  на основе этой клетки Cell, вызываем метод linkTile который получит координаты из Grid и содаст ячейку
// в метод сразу прокидываем создание экземпляра ячейки Tile, который задает для нее числовое значение
// и сохраняет координаты в css для отображения на странице
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
// Добавляем еще одну плитку
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));

const setupInputOnce = () => {
  window.addEventListener("keydown", handleInpuChange, { once: true });
};

const handleInpuChange = ({ key }) => {
  switch (key) {
    case "ArrowUp":
      moveUp();
      break;
    case "ArrowDown":
      break;
    case "ArrowRight":
      break;
    case "ArrowLeft":
      break;

    default:
      setupInputOnce();
      return;
  }
};

const moveUp = () => {
  slideTiles(grid.cellGropuByColumn);
};

const slideTiles = (groupedCells) => {
  console.log("groupedCells:", groupedCells);
};

setupInputOnce();
