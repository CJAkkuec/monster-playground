import { socket } from "../../utils/socket";
import { useState, useEffect } from "react";

import styled from "styled-components";
import Monster from "../Monster";

import useMonsterMovement from "../../utils/useMonsterMovement";

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
  width: 60px;
  height: 60px;
  text-align: center;
`;

function Playground({ focusRef, myMonster, otherMonsters }) {
  const [iceCreamPosition, setIceCreamPosition] = useState({
    x: -1000,
    y: -1000,
  });

  useEffect(() => {
    socket?.on("updateIceCreamPosition", (iceCreamPosition) => {
      setIceCreamPosition(iceCreamPosition);
    });
  }, [iceCreamPosition]);

  const { handleKeyDown } = useMonsterMovement(myMonster);

  useEffect(() => {
    if (myMonster !== null) {
      focusRef.current.focus();
    }
  }, []);

  return (
    <MonsterPlayground ref={focusRef} onKeyDown={handleKeyDown} tabIndex="0">
      <MonsterWash />
      <IceCream top={iceCreamPosition.y} left={iceCreamPosition.x}>
        🍦
      </IceCream>
      <Monster top={myMonster.y} left={myMonster.x} monster={myMonster} />
      {otherMonsters.map((monster) => (
        <Monster top={monster.y} left={monster.x} monster={monster} />
      ))}
    </MonsterPlayground>
  );
}

export default Playground;
