import axios from 'axios';

const loadBoards = () => axios.get('../db/boards.json');

export default { loadBoards };
