import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout";
import Playground from "../components/Playground";
import Button from "../components/Button";
import MessageForm from "../components/MessageForm";

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

function PlaygroundPage({
  myMonster,
  onSubmit,
  onClick,
  handleAddIceCream,
  fontFredoka,
  focusRef,
  handleChange,
  value,
}) {
  return (
    <Layout>
      {myMonster !== null && (
        <>
          <Playground
            focusRef={focusRef}
            myMonster={myMonster}
            addIceCream={handleAddIceCream}
          />
          <ButtonWrapper>
            <Button
              action="happy"
              onClick={onClick}
              fontFredoka={fontFredoka}
            />
            <Button
              action="heart"
              onClick={onClick}
              fontFredoka={fontFredoka}
            />
            <Button action="star" onClick={onClick} fontFredoka={fontFredoka} />
          </ButtonWrapper>
          <MessageForm
            onSubmit={onSubmit}
            onChange={handleChange}
            message={myMonster.message}
            value={value}
          />
        </>
      )}
    </Layout>
  );
}

export default PlaygroundPage;
