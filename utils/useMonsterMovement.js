import { useState, useCallback } from "react";

function useMonsterMovement(
  monster,
  monsterWidth,
  monsterHeight,
  playgroundWidth,
  playgroundHeight
) {
  const [monsterPosition, setMonsterPosition] = useState({
    x: monster.x,
    y: monster.y,
  });
  const [boost, setBoost] = useState(false);

  const handleKeyDown = useCallback(
    (event) => {
      switch (event.key) {
        case "ArrowUp":
          setMonsterPosition((prevPosition) => {
            let newY = prevPosition.y - (boost ? 20 : 10);
            if (newY < 0) newY = 0;
            return { x: prevPosition.x, y: newY };
          });
          break;
        case "ArrowDown":
          setMonsterPosition((prevPosition) => {
            let newY = prevPosition.y + (boost ? 20 : 10);
            if (newY + monsterHeight > playgroundHeight)
              newY = playgroundHeight - monsterHeight;
            return { x: prevPosition.x, y: newY };
          });
          break;
        case "ArrowLeft":
          setMonsterPosition((prevPosition) => {
            let newX = prevPosition.x - (boost ? 20 : 10);
            if (newX < 0) newX = 0;
            return { x: newX, y: prevPosition.y };
          });
          break;
        case "ArrowRight":
          setMonsterPosition((prevPosition) => {
            let newX = prevPosition.x + (boost ? 20 : 10);
            if (newX + monsterWidth > playgroundWidth)
              newX = playgroundWidth - monsterWidth;
            return { x: newX, y: prevPosition.y };
          });
          break;
        case "b":
          setBoost(!boost);
          break;
        default:
          break;
      }
    },
    [playgroundWidth, playgroundHeight, monsterWidth, monsterHeight, boost]
  );

  return { monsterPosition, handleKeyDown };
}

export default useMonsterMovement;
