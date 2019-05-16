import axios from 'axios';

const loadPinsForBoard = boardId => new Promise((resolve, reject) => {
  axios.get('../db/pins.json')
    .then((resp) => {
      const allPins = resp.data.pins;
      const matchingPins = allPins.filter(pin => pin.boardId === boardId);
      resolve(matchingPins);
    })
    .catch(err => reject(err));
});

const getPinsForEachBoard = boards => new Promise((resolve, reject) => {
  axios.get('../db/pins.json')
    .then((resp) => {
      const { pins } = resp.data;
      const boardsWithPins = boards.map((board) => {
        const newBoard = board;
        const matchingPins = pins.filter(pin => pin.boardId === board.id);
        newBoard.pins = matchingPins;
        return newBoard;
      });

      resolve(boardsWithPins);
    })
    .catch(err => reject(err));
});

export default { loadPinsForBoard, getPinsForEachBoard };
