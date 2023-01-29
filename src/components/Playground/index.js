import styled from "styled-components";
import Monster from "../Monster";
import useMonsterMovement from "../../utils/useMonsterMovement";
import { useEffect, useState } from "react";

const MonsterPlayground = styled.div`
  position: relative;
  background-color: var(--fresh);
  outline: 10px double var(--fresh);
  width: 1000px;
  height: 1000px;
  box-shadow: inset 0px 5px 20px 5px var(--dark-choc);

  &:focus {
    outline: 10px double var(--fresh);
  }
`;

const MonsterWash = styled.div`
  position: absolute;
  background-image: url(./assets/graphics/carpet_fresh.png);
  width: 1000px;
  height: 1000px;
  top: 0;
  left: 0;
  opacity: 0.3;
`;

const IceCream = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  font-size: 3rem;
`;

function Playground({ focusRef, myMonster, otherMonsters }) {
  const [iceCreamPosition, setIceCreamPosition] = useState({
    x: -1000,
    y: -1000,
  });
  const [counter, setCounter] = useState(0);

  const playgroundWidth = 1000;
  const playgroundHeight = 1000;
  const monsterWidth = myMonster.width;
  const monsterHeight = myMonster.height;

  const { monsterPosition, handleKeyDown } = useMonsterMovement(
    myMonster,
    monsterWidth,
    monsterHeight,
    playgroundWidth,
    playgroundHeight
  );

  useEffect(() => {
    let intervalId;
    const timeoutId = setTimeout(() => {
      setIceCreamPosition({
        x: Math.floor(Math.random() * 900),
        y: Math.floor(Math.random() * 900),
      });
      intervalId = setInterval(() => {
        setIceCreamPosition({ x: -1000, y: -1000 });
        setTimeout(() => {
          setIceCreamPosition({
            x: Math.floor(Math.random() * 900),
            y: Math.floor(Math.random() * 900),
          });
        }, 10000);
      }, 20000);
    }, 10000);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (
      monsterPosition.x >= iceCreamPosition.x - 60 &&
      monsterPosition.x <= iceCreamPosition.x + 60 &&
      monsterPosition.y >= iceCreamPosition.y - 60 &&
      monsterPosition.y <= iceCreamPosition.y + 60
    ) {
      setIceCreamPosition({ x: -1000, y: -1000 });
      setCounter(counter + 1);
    }
  }, [monsterPosition, iceCreamPosition, counter]);

  return (
    <MonsterPlayground ref={focusRef} onKeyDown={handleKeyDown} tabIndex="0">
      <MonsterWash />
      <IceCream top={iceCreamPosition.y} left={iceCreamPosition.x}>
        🍦
      </IceCream>
      <Monster
        top={monsterPosition.y}
        left={monsterPosition.x}
        monster={myMonster}
      />
      {otherMonsters.map((monster) => (
        <Monster top={monster.y} left={monster.x} monster={monster} />
      ))}
    </MonsterPlayground>
  );
}

export default Playground;
