import { disableChat, enableChat } from "./chat";
import {
  disableCanvas,
  hideControls,
  enableCanvas,
  showControls,
  resetCanvas,
} from "./paint";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNorifs");

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElement);
  });
};

const setNotifs = (text) => {
  notifs.innerText = "";
  notifs.innerText = text;
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);

export const handleGameStarted = () => {
  setNotifs("");
  disableCanvas();
  hideControls();
  enableChat();
};

export const handlePainterNotif = ({ word }) => {
  enableCanvas();
  showControls();
  disableChat();
  notifs.innerText = `당신이 출제자입니다😉 문제: ${word}`;
};

export const handleGameEnded = () => {
  setNotifs("게임 끝😆");
  disableCanvas();
  hideControls();
  resetCanvas();
};

export const handleGameStarting = () => {
  setNotifs("게임이 곧 시작됩니다🤫");
};
