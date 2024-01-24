import Grid from "./js/grid";
import Tile from "./js/tile";

const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);

grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
