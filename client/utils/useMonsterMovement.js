import { useCallback } from "react";
import { socket } from "./socket";

function useMonsterMovement(monster) {
  const handleKeyDown = useCallback((event) => {
    if (event.repeat) return;

    switch (event.key) {
      case "ArrowUp":
        socket.emit("monsterMove", { id: monster.userId, move: event.key });

        break;
      case "ArrowDown":
        socket.emit("monsterMove", { id: monster.userId, move: event.key });

        break;
      case "ArrowLeft":
        socket.emit("monsterMove", { id: monster.userId, move: event.key });
        break;
      case "ArrowRight":
        socket.emit("monsterMove", { id: monster.userId, move: event.key });
        break;

      default:
        break;
    }
  }, []);

  return { handleKeyDown };
}

export default useMonsterMovement;
