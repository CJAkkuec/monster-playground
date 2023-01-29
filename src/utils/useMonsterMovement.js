import { useState, useCallback } from "react";

function useMonsterMovement(
  playgroundWidth,
  playgroundHeight,
  monsterWidth,
  monsterHeight
) {
  const [monsterPosition, setMonsterPosition] = useState({
    x: playgroundWidth / 2 - monsterWidth,
    y: playgroundHeight / 2 - monsterHeight,
  });

  const handleKeyDown = useCallback(
    (event) => {
      switch (event.key) {
        case "ArrowUp":
          setMonsterPosition((prevPosition) => {
            let newY = prevPosition.y - 10;
            if (newY < 0) newY = 0;
            return { x: prevPosition.x, y: newY };
          });
          break;
        case "ArrowDown":
          setMonsterPosition((prevPosition) => {
            let newY = prevPosition.y + 10;
            if (newY + monsterHeight > playgroundHeight)
              newY = playgroundHeight - monsterHeight;
            return { x: prevPosition.x, y: newY };
          });
          break;
        case "ArrowLeft":
          setMonsterPosition((prevPosition) => {
            let newX = prevPosition.x - 10;
            if (newX < 0) newX = 0;
            return { x: newX, y: prevPosition.y };
          });
          break;
        case "ArrowRight":
          setMonsterPosition((prevPosition) => {
            let newX = prevPosition.x + 10;
            if (newX + monsterWidth > playgroundWidth)
              newX = playgroundWidth - monsterWidth;
            return { x: newX, y: prevPosition.y };
          });
          break;
        default:
          break;
      }
    },
    [playgroundWidth, playgroundHeight, monsterWidth, monsterHeight]
  );

  return { monsterPosition, handleKeyDown };
}

export default useMonsterMovement;
