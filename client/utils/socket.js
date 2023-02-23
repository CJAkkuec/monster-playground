import { io } from "socket.io-client";

export let socket;

export const init = (myMonster) => {
  if (!socket) {
    socket = io("http://localhost:3001", { query: myMonster });
  }
};
